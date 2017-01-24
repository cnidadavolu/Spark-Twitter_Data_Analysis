import org.apache.spark._
import org.apache.spark.SparkContext._

object Main {

val sc = {
val conf = new org.apache.spark.SparkConf().setMaster("local").setAppName("Sbt Console +Spark!")
new org.apache.spark.SparkContext(conf)
}

val sqlContext = new org.apache.spark.sql.SQLContext(sc)

val path = "/home/sindhu/Desktop/BigDataProject/TweetsDV.json"
val tweets = sqlContext.jsonFile(path)
tweets.registerTempTable("tweets")


val Query1 = sqlContext.sql("select substring(user.created_at, 5,3), count(*) from tweets where user.created_at is not null group by substring(user.created_at, 5,3)")
Query1.show

val Query2 = sqlContext.sql("select t.range as Favorites_range, count(*) as count from (select case when retweeted_status.favorite_count =  0 then ' 0 ' when retweeted_status.favorite_count between 1 and 1000 then '1-1000' when retweeted_status.favorite_count between 1001 and 2000 then '1001-2000' when retweeted_status.favorite_count between 2001 and 3000 then '2001-3000' when retweeted_status.favorite_count between 3001 and 4000 then '3001-4000' when retweeted_status.favorite_count between 4001 and 5000 then '4001-5000' when retweeted_status.favorite_count between 5001 and 6000 then '5001-6000' when retweeted_status.favorite_count between 6001 and 7000 then '7001-8000' when retweeted_status.favorite_count between 8001 and 9000 then '8001-9000' when retweeted_status.favorite_count between 9001 and 10000 then '9001-10000' else '>10000' end as range from tweets) t group by t.range")


val Query3 = sqlContext.sql("SELECT place.country_code, place.country, count(*) as count FROM people WHERE place.country IS NOT NULL GROUP BY place.country, place.country_code ORDER BY place.country_code")


val Query4 = sqlContext.sql("SELECT lower(entities.hashtags.text[0]), count(*) as count FROM tweets WHERE entities.hashtags.text[0] IS NOT NULL group by lower(entities.hashtags.text[0]) order by count desc")


val x1 = sqlContext.sql("select user.time_zone as time_zone, count(*) as Tweet_count from tweets where user.time_zone is not null group by user.time_zone order by Tweet_count desc")

val x2 = sqlContext.sql("select retweeted_status.user.time_zone as time_zone, count(*) as Retweet_count from tweets where retweeted_status.user.time_zone is not null group by retweeted_status.user.time_zone order by Retweet_count desc")

x1.registerTempTable("x1")
x2.registerTempTable("x2")
val Query5 = sqlContext.sql("select x1.time_zone, x1.Tweet_count, x2.Retweet_count from x1 inner join x2 on x1.time_zone = x2.time_zone order by x1.Tweet_count desc")


val Query6 = sqlContext.sql("select possibly_sensitive, count(*) from tweets where lang = 'en' and possibly_sensitive is not null group by possibly_sensitive")


val Query7 = sqlContext.sql("select geo.coordinates[0], geo.coordinates[1], count(*) from tweets where geo is not null group by geo")


val Query8=sqlContext.sql("SELECT place.place_type, count(*) from tweets where place.place_type is not null group by place.place_type")

}
