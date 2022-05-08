import { assert, expect } from "chai";
import { scheduleMeeting } from "./scheduleMeeting.js";

describe("Schedule For Meeting whith string input and string output",function(){
    describe("Tests with normal length of input", function(){
        it("should include the string \"1 13:00-13:59\" for the input : 5, [1, \"08:45-12:59\"],[2, \"08:24-10:54\"],[1, \"14:45-14:47\"],[3, \"09:56-16:25\"],[5, \"15:16-16:28\"].", function(){
            const input = [5,"1 08:45-12:59","2 08:24-10:54","1 14:45-14:47","3 09:56-16:25","5 15:16-16:28"];
            expect(scheduleMeeting(input)).to.deep.include("1 13:00-13:59");
        });
        it("should include the string \"2 08:00-08:59\" for the input : 5 [1, \"08:00-17:59\"],[1, \"12:23-16:27\"],[4, \"09:49-16:14\"],[2, \"11:47-13:36\"],[2, \"12:47-15:05\"].", function(){
            const input = [5, "1 08:00-17:59","1 12:23-16:27","4 09:49-16:14","2 11:47-13:36","2 12:47-15:05"];
            expect(scheduleMeeting(input)).to.deep.include("2 08:00-08:59");
        });
        it("should include the string  \"2 08:00-08:59\" for the input :5, [5, \"08:00-17:59\"],[1, \"08:00-17:59\"],[3, \"08:00-17:59\"],[2, \"09:00-17:59\"],[4, \"08:00-17:59\"].", function(){
            const input = [5, "5 08:00-17:59","1 08:00-17:59","3 08:00-17:59","2 09:00-17:59","4 08:00-17:59"];
            expect(scheduleMeeting(input)).to.deep.include("2 08:00-08:59");
        });
    })

    describe("Tests with long length of input", function(){
        it("should include the string \"2 12:29-13:28\" in a 16 elements array.",function(){
            const input = [16, "1 09:42-11:00","4 12:06-12:36","2 17:52-17:58","1 14:50-15:14","1 08:00-17:59","2 08:00-12:28","2 17:16-17:41","1 08:10-13:01","2 13:29-17:59","5 17:55-17:56","4 08:00-17:59","3 13:00-13:38","2 10:38-10:59","5 08:00-17:59","5 16:27-17:34","3 08:00-17:59"];
            assert.exists(scheduleMeeting(input), "2 12:29-13:28");
        });
        it("should include the string \"3 13:18-14:17\" in a bigest elements of array.",function(){
            const input = [1000,"4 17:18-17:56","3 15:14-17:53","1 14:15-14:26","4 13:43-15:08","2 16:06-16:34","5 13:26-14:25","4 15:21-16:07","4 08:32-13:07","5 08:35-17:31","5 09:40-10:50","3 08:36-08:57","1 17:49-17:56","1 13:49-16:47","1 14:29-14:51","5 08:25-09:24","5 16:37-17:57","3 09:28-10:25","3 12:42-13:07","1 13:10-14:25","5 10:50-14:09","1 10:55-17:55","4 09:07-15:21","3 08:46-11:09","4 08:53-13:44","5 10:25-16:21","5 09:49-15:38","2 17:58-17:58","3 15:52-17:55","1 17:48-17:54","2 13:31-15:24","2 08:54-14:40","1 11:51-17:09","2 10:12-15:42","1 17:57-17:58","4 13:23-16:31","3 15:38-17:33","5 12:07-15:51","2 08:38-17:26","5 08:25-15:50","1 17:20-17:22","1 11:03-14:59","1 10:54-16:04","3 08:04-12:16","1 09:22-10:29","5 08:39-15:10","5 10:44-11:56","1 13:50-15:50","3 14:48-15:52","1 16:29-17:17","4 10:10-17:04","4 13:30-16:12","4 11:32-17:19","3 16:51-16:56","5 16:14-16:42","2 08:53-12:20","1 10:28-13:00","3 16:18-16:42","5 08:32-14:22","3 10:50-11:08","4 17:52-17:57","5 08:44-10:33","3 15:51-17:28","1 13:19-14:51","3 12:38-12:53","3 09:56-12:21","2 13:55-15:34","1 16:00-16:05","5 12:07-13:35","2 11:28-15:51","1 15:36-17:08","5 13:25-17:05","5 12:39-13:11","3 16:24-17:42","1 17:39-17:39","3 17:23-17:51","2 10:29-15:24","3 11:46-12:05","4 13:52-16:23","2 11:10-13:11","3 15:06-17:14","5 09:36-10:36","4 12:46-15:36","5 11:50-13:29","4 15:32-16:55","2 17:29-17:39","3 14:35-14:42","2 17:06-17:20","3 09:29-10:04","1 12:39-15:49","1 11:59-16:41","1 11:40-12:28","1 14:12-15:54","1 10:06-17:06","2 13:14-16:10","1 12:32-17:37","4 13:10-17:54","5 14:03-15:21","3 10:23-10:31","1 14:48-14:48","2 11:48-17:11","1 11:34-15:03","2 16:55-17:24","1 09:08-10:03","5 15:22-16:10","1 08:06-12:12","4 15:49-16:45","1 12:29-12:39","3 15:32-15:38","1 15:09-16:37","2 16:20-17:01","2 09:32-16:44","5 17:33-17:55","1 11:54-13:20","2 16:20-17:20","1 16:48-16:56","2 13:13-16:39","5 09:27-09:57","2 08:47-14:30","3 12:52-13:01","2 08:18-08:22","1 15:44-17:47","5 11:39-16:26","1 12:23-15:57","1 10:04-15:00","2 15:04-16:14","5 10:27-15:51","3 12:54-13:17","4 12:26-16:11","5 16:15-16:56","1 08:58-09:19","2 17:36-17:54","4 15:33-16:04","2 13:02-17:27","2 14:31-15:24","1 14:58-15:35","5 17:09-17:22","2 13:26-15:53","1 16:27-17:00","3 16:53-17:36","4 14:57-16:05","4 08:47-09:03","3 14:22-17:38","5 16:15-17:15","2 14:44-17:58","1 09:13-12:31","2 09:20-11:32","5 15:10-17:33","5 13:04-16:07","2 09:43-16:54","1 16:05-16:31","3 12:03-13:00","2 15:54-17:39","4 08:16-10:42","5 13:59-15:23","2 13:29-14:18","2 13:32-15:18","3 09:53-11:17","4 13:16-17:10","2 13:09-14:30","1 15:21-15:22","2 14:10-14:52","3 14:32-15:31","4 14:46-16:59","2 16:40-17:41","4 17:15-17:27","3 14:29-16:59","4 14:08-15:39","5 16:49-17:25","5 15:19-15:36","3 17:53-17:58","2 09:15-10:59","4 15:04-17:53","5 17:13-17:20","2 15:46-17:08","5 12:40-14:25","4 08:48-12:24","3 11:08-12:11","1 14:00-17:50","3 16:39-16:48","2 12:31-14:04","3 16:23-17:37","3 08:21-11:13","1 17:32-17:38","5 10:27-16:59","5 10:36-12:58","1 17:00-17:43","3 08:47-11:11","1 17:33-17:46","2 10:59-13:59","5 13:08-13:11","1 11:17-11:43","5 13:49-17:55","3 08:39-10:49","2 17:45-17:58","5 08:23-17:13","1 13:01-17:16","5 15:32-17:30","4 17:37-17:48","5 15:05-16:28","3 12:39-13:00","5 09:33-14:46","1 11:43-13:53","3 11:53-12:08","3 12:25-12:40","2 12:29-15:36","4 08:32-11:23","1 13:07-13:32","5 13:56-16:00","1 12:08-13:17","4 14:49-15:03","3 08:47-11:56","4 16:40-17:29","1 14:12-16:53","4 10:14-17:21","1 09:57-13:36","1 16:21-16:36","1 16:36-17:05","1 13:58-16:29","1 10:37-17:28","5 10:08-14:58","3 10:00-12:21","3 08:13-09:29","3 13:09-13:12","3 08:55-13:09","3 09:43-10:14","4 15:00-17:51","2 08:57-10:21","5 15:50-16:46","1 11:34-12:33","3 14:20-16:43","5 08:39-09:53","1 13:32-13:46","1 15:44-16:30","2 09:13-13:29","5 08:56-11:29","1 12:55-14:37","5 16:57-17:54","2 08:28-10:54","3 09:36-11:22","5 16:10-17:02","5 15:41-16:07","5 12:17-16:51","5 12:27-15:26","5 14:52-16:50","2 09:32-12:47","2 10:51-12:46","1 12:31-17:56","2 10:45-14:52","2 12:41-14:12","5 08:39-15:13","5 17:23-17:43","1 12:29-17:59","4 08:07-17:04","4 16:13-17:09","2 09:48-13:44","2 15:50-17:58","4 10:39-17:34","3 14:39-16:33","1 08:43-13:37","4 13:17-17:39","1 15:38-16:34","2 09:48-12:22","2 14:09-16:24","1 08:15-16:48","3 12:21-12:52","3 09:25-12:39","2 14:12-14:42","1 09:54-12:46","1 11:35-13:28","2 13:52-17:02","2 08:20-08:34","5 12:24-16:09","3 13:15-13:15","3 14:40-16:05","4 15:47-17:27","1 09:40-12:30","4 09:48-14:37","3 12:34-12:36","1 10:02-13:09","3 13:04-13:11","4 08:42-17:02","4 14:47-14:51","5 12:06-16:42","3 10:31-13:16","4 11:21-14:30","3 15:19-16:40","1 10:33-14:30","1 14:51-15:56","2 14:22-16:04","5 13:42-17:32","4 16:32-17:37","4 15:10-16:04","1 10:18-14:20","4 15:26-16:40","3 11:04-11:29","5 08:00-14:54","5 13:25-15:48","5 15:29-16:36","3 09:41-11:17","4 14:37-17:02","5 14:41-16:43","4 15:38-15:57","3 11:32-12:48","3 15:26-15:51","4 12:26-14:07","5 17:26-17:34","1 10:34-11:15","5 14:59-15:19","2 16:32-17:10","1 09:44-13:30","3 13:09-13:17","3 12:55-13:09","1 13:49-13:51","3 12:04-12:53","1 15:37-17:46","4 08:08-17:20","3 09:46-12:40","3 15:40-16:32","2 10:12-10:38","4 14:22-16:42","1 16:47-17:03","1 08:23-16:19","3 15:21-15:30","3 12:44-13:06","4 16:33-17:26","3 15:43-17:40","4 08:46-10:23","2 15:15-16:24","3 15:44-16:23","5 10:11-15:09","5 08:07-12:14","4 08:16-10:36","5 17:20-17:23","5 17:10-17:28","1 11:19-11:55","5 08:53-10:50","5 13:47-16:11","2 09:43-11:57","4 14:54-16:14","1 15:42-17:45","5 17:34-17:38","2 10:20-16:46","4 09:23-17:08","1 13:33-16:53","2 09:03-12:57","4 08:37-11:07","5 16:30-17:40","5 17:20-17:49","5 17:10-17:17","1 10:54-14:23","1 11:40-12:57","1 13:58-17:38","5 15:11-15:27","5 08:53-16:11","1 10:32-14:48","4 16:25-17:14","2 09:11-10:18","3 10:44-12:29","2 17:16-17:22","3 11:01-12:47","4 13:54-15:36","2 13:57-17:47","1 08:51-17:27","2 14:55-14:59","1 14:51-14:59","1 10:11-17:47","4 14:22-17:45","3 09:21-11:35","1 11:45-15:05","5 14:57-17:15","1 10:26-14:44","1 14:45-16:27","5 13:38-16:15","3 14:30-17:50","4 14:58-16:57","3 15:22-16:36","2 08:11-17:53","5 10:18-13:58","3 14:41-17:07","3 16:48-17:49","4 11:06-11:09","5 08:21-14:48","5 09:01-14:06","2 14:04-14:09","1 17:29-17:48","3 08:57-10:23","1 09:29-17:46","1 13:33-13:38","1 13:57-15:45","4 09:16-13:08","2 09:48-13:49","5 14:16-17:40","2 12:47-14:55","2 12:48-13:05","2 13:33-16:34","3 16:42-17:49","4 11:08-16:42","4 14:23-15:14","1 15:37-17:09","1 13:38-17:53","3 14:39-14:48","5 14:39-15:18","1 08:26-10:30","2 17:57-17:57","2 10:30-12:37","4 14:59-15:30","1 13:02-13:16","5 17:35-17:54","2 16:04-17:15","2 13:46-14:01","1 15:44-16:25","3 16:28-17:26","4 17:48-17:51","4 16:13-17:11","1 15:49-16:25","2 09:38-14:03","3 13:15-13:17","2 13:47-14:01","5 17:10-17:51","5 11:52-12:57","1 13:07-17:16","4 09:10-16:31","3 17:28-17:56","5 12:43-17:28","5 15:43-16:53","4 09:08-10:46","3 11:10-11:43","2 14:58-16:11","1 12:49-14:03","1 11:40-13:38","5 10:59-17:48","4 08:06-16:20","4 11:44-14:45","1 13:54-16:56","2 11:20-15:22","4 15:45-16:33","4 13:38-15:56","5 17:03-17:28","4 13:08-16:42","1 16:53-17:42","2 16:49-17:22","5 09:29-09:31","3 10:23-10:59","5 16:09-16:23","4 16:53-16:58","5 17:47-17:56","5 14:19-15:30","1 14:07-17:44","3 17:42-17:51","5 12:02-15:04","1 08:53-13:13","4 13:00-17:31","1 10:24-16:14","4 09:50-10:05","4 13:32-14:53","1 08:23-13:02","4 17:01-17:02","5 12:23-15:14","2 17:20-17:55","3 10:38-11:27","3 09:24-09:40","2 09:15-13:06","4 14:19-14:43","4 13:53-15:14","1 12:11-12:34","3 17:00-17:33","2 11:14-12:16","3 09:21-12:41","5 17:16-17:46","5 09:40-17:29","4 14:59-17:21","1 16:49-17:46","1 14:38-17:33","3 10:28-12:31","1 15:43-17:52","5 10:53-13:19","3 11:49-12:11","4 11:24-14:42","4 13:16-14:54","3 08:35-12:23","1 14:31-15:42","4 08:51-16:38","5 17:59-17:59","5 15:44-17:26","1 11:22-13:34","5 17:47-17:59","4 09:40-15:17","5 13:24-14:30","5 13:55-14:05","4 10:34-14:32","5 14:35-15:50","4 12:45-17:21","3 15:59-17:51","4 08:27-09:36","2 08:24-15:17","1 10:08-10:48","1 12:12-15:29","4 14:07-16:47","3 09:05-12:33","3 09:34-11:10","4 13:24-14:35","2 08:38-14:57","5 16:41-17:56","3 16:56-17:22","4 14:31-17:54","5 15:47-15:58","3 11:51-12:23","2 09:28-11:54","5 15:12-16:43","5 09:56-16:44","3 13:11-13:12","3 16:33-17:29","3 12:41-12:46","2 16:26-17:36","4 17:21-17:37","4 08:04-17:44","1 10:13-14:49","1 08:29-12:23","5 10:48-12:12","3 11:00-11:40","3 09:37-10:44","5 16:58-17:57","4 17:28-17:58","4 15:31-15:37","5 11:20-14:17","5 09:17-14:26","4 17:04-17:51","5 12:57-17:06","4 16:54-17:56","5 10:43-13:46","4 10:27-17:14","1 08:09-17:38","1 09:59-13:18","5 17:38-17:41","3 17:37-17:55","2 10:22-16:28","1 13:21-17:29","3 14:39-17:37","1 15:45-16:06","1 10:56-16:23","2 10:31-11:54","2 13:30-17:36","4 08:51-11:42","5 11:50-12:59","1 16:19-17:05","1 09:04-09:43","1 17:56-17:59","5 13:57-15:45","4 09:17-12:04","1 13:47-16:59","2 16:47-17:41","1 12:13-16:06","2 08:49-12:45","1 12:22-14:32","1 12:46-17:37","1 16:07-17:36","4 10:39-14:53","3 08:26-11:55","5 09:24-15:20","5 16:43-17:13","5 12:10-15:33","5 16:14-16:49","1 08:03-14:39","5 15:42-17:00","5 09:57-13:02","5 11:46-11:47","2 09:26-15:44","4 14:50-17:06","1 08:57-12:57","3 11:54-12:44","2 11:02-14:43","4 14:43-17:55","1 14:35-15:59","1 13:25-17:53","1 13:35-14:34","2 10:15-12:54","3 08:13-10:42","1 14:06-15:07","1 17:34-17:41","2 17:30-17:48","1 15:21-15:28","1 14:01-15:22","4 10:38-17:32","4 17:24-17:29","2 12:12-13:32","1 14:39-17:27","1 10:54-14:57","5 17:56-17:59","4 17:29-17:46","5 15:10-17:50","4 10:57-16:13","2 12:17-13:18","3 13:13-13:13","3 17:15-17:38","4 12:26-13:59","1 09:38-14:56","3 11:49-12:31","4 08:15-11:10","4 09:21-11:57","3 17:26-17:30","2 17:58-17:58","3 12:27-12:38","2 17:20-17:21","3 16:02-16:04","2 12:10-17:54","4 14:43-14:56","5 15:20-17:57","4 15:02-17:13","1 09:30-14:42","3 12:46-13:04","2 12:38-14:51","4 15:05-17:09","3 13:09-13:15","5 12:41-16:55","5 11:56-14:14","2 09:23-10:08","2 17:07-17:33","5 15:12-17:12","4 15:28-17:54","3 16:04-16:23","1 14:48-15:01","4 10:12-13:50","5 11:37-15:08","5 11:12-14:51","2 17:39-17:39","2 15:51-17:07","4 08:12-17:49","2 10:50-12:17","4 11:08-13:17","5 11:17-17:32","3 15:05-15:24","5 10:53-15:23","1 13:28-14:43","4 11:44-14:20","1 13:53-17:33","3 11:31-12:01","3 08:46-11:16","4 09:39-12:26","3 09:27-12:30","4 15:58-16:02","3 08:03-11:55","5 14:13-16:41","2 17:49-17:58","1 10:25-11:29","4 10:03-10:41","5 17:24-17:29","1 10:05-12:03","2 11:56-13:44","4 10:06-12:16","4 13:18-16:48","5 09:42-16:56","1 15:59-16:28","1 09:33-16:57","4 17:53-17:53","4 11:35-13:07","1 12:44-17:01","3 16:53-17:23","5 15:16-16:18","5 11:24-14:36","3 15:06-17:18","1 10:01-16:00","5 11:37-12:26","3 08:17-10:28","2 13:52-14:34","4 08:57-14:58","3 12:58-12:59","3 14:39-15:23","4 16:48-17:36","4 09:38-17:25","5 17:39-17:44","1 11:23-14:41","4 16:41-16:54","1 13:36-15:47","4 14:47-16:36","3 17:40-17:47","2 09:53-14:17","1 16:39-16:54","4 17:10-17:25","2 13:31-15:45","2 09:32-12:57","3 10:23-10:29","2 10:58-13:07","4 10:28-10:41","3 16:49-17:17","4 11:42-13:52","2 13:54-13:59","2 13:30-16:32","5 15:44-15:48","5 10:14-14:03","2 08:08-12:28","3 12:54-13:10","2 10:22-15:03","5 14:16-17:33","3 17:54-17:57","1 12:19-12:25","3 09:10-09:31","1 13:26-15:20","3 14:58-16:16","4 09:53-17:31","5 17:50-17:58","3 15:00-15:06","2 16:47-16:58","2 09:50-13:47","4 09:01-09:22","5 10:46-16:10","1 17:18-17:28","5 08:16-14:21","5 13:43-16:16","5 10:27-16:17","2 14:41-17:51","5 10:42-13:13","3 12:12-12:36","3 08:16-12:19","5 14:57-16:00","4 14:44-17:04","5 13:59-17:18","3 08:24-09:36","1 08:50-16:11","1 15:29-17:49","5 17:10-17:57","1 09:07-15:00","2 15:39-16:21","1 15:05-16:31","4 13:32-17:44","3 16:43-17:57","3 10:19-12:21","5 17:22-17:32","3 08:31-09:59","1 12:29-15:17","3 11:52-12:23","3 15:25-17:23","2 13:05-13:29","5 09:04-15:44","5 11:55-12:18","3 10:01-12:11","3 10:29-12:09","2 10:42-16:03","1 12:31-16:57","5 15:33-16:14","4 08:38-10:41","1 17:36-17:50","2 13:47-17:27","1 11:22-16:52","2 13:19-14:52","5 16:20-17:03","1 11:46-14:18","4 10:13-11:08","2 16:59-17:32","4 16:30-16:59","4 13:59-14:34","4 11:32-11:37","3 09:15-12:37","3 09:28-10:08","1 09:11-16:46","5 13:44-17:31","3 11:07-11:43","2 14:42-16:48","1 11:20-17:26","3 08:02-11:45","3 12:32-13:07","1 08:59-12:26","4 11:20-12:02","4 11:30-16:32","2 09:18-17:23","3 15:55-17:00","5 08:21-08:23","2 12:24-14:00","4 12:11-17:46","1 09:51-12:55","2 13:15-16:29","2 15:03-16:14","3 08:07-10:50","3 13:03-13:13","5 17:24-17:44","2 08:00-16:22","2 09:38-15:56","3 16:22-16:40","5 12:37-17:08","4 16:43-17:32","2 14:57-16:26","3 17:27-17:28","3 16:44-17:10","3 10:00-10:32","2 10:35-10:50","2 11:40-15:13","2 13:25-16:49","5 14:45-15:15","1 16:44-16:46","5 08:54-16:37","1 15:56-17:31","1 15:05-15:26","1 11:20-17:32","4 11:13-11:39","5 16:19-16:41","5 13:56-14:08","4 10:32-14:58","2 12:45-14:10","4 14:13-15:00","1 09:40-12:13","2 08:33-14:41","1 11:43-11:48","4 15:15-17:16","3 09:47-10:46","2 12:54-17:15","2 08:20-09:36","3 17:07-17:20","1 08:41-10:44","1 15:34-16:17","4 12:57-15:19","5 15:41-16:54","5 10:38-17:29","4 08:26-10:31","2 17:03-17:04","4 08:41-12:27","4 15:56-16:41","5 10:05-15:56","2 16:31-17:54","5 12:58-16:53","5 16:10-16:55","1 11:31-17:58","4 16:58-17:01","4 10:09-11:18","2 08:12-16:04","2 12:42-16:52","4 15:35-15:42","1 13:46-14:29","2 10:58-13:45","2 12:26-15:18","4 11:49-16:21","1 08:29-12:25","1 10:34-13:36","2 09:10-15:18","4 16:48-17:07","3 13:03-13:14","1 13:41-16:19","2 09:55-16:40","1 10:45-14:28","2 14:26-17:52","1 15:45-17:19","3 15:24-17:29","2 15:56-17:27","3 15:28-17:21","5 17:54-17:58","5 11:11-16:23","2 15:38-15:49","3 15:42-16:33","2 13:50-15:49","4 13:45-16:20","3 17:07-17:12","4 14:29-16:18","5 14:18-15:13","4 17:18-17:54","4 16:43-16:53","2 16:40-16:57","2 10:05-17:33","3 08:46-09:41","4 12:56-16:38","2 11:29-14:21","5 08:37-09:54","4 09:57-17:52","3 15:03-16:31","5 14:06-14:19","4 08:06-11:10","2 16:54-17:01","5 16:56-17:35","5 13:54-16:30","4 16:21-16:21","3 12:15-12:44","1 13:53-16:57","4 09:35-14:31","1 10:45-14:34","1 13:00-16:48","1 12:46-12:55","2 12:34-14:26","5 12:32-14:32","5 14:15-16:02","4 17:56-17:57","4 11:32-15:23","4 17:51-17:58","2 16:05-16:15","3 08:23-11:05","2 08:12-17:12","2 15:21-17:59","5 10:20-11:40","3 09:56-10:04","3 12:31-13:00","3 17:30-17:58","4 08:10-13:35","1 12:03-12:39","2 13:47-15:01","2 14:01-15:07","2 16:32-17:36","2 09:30-17:45","4 11:56-15:53","5 13:53-17:45","3 17:54-17:58","3 10:00-11:05","5 10:52-11:44","1 13:23-16:51","3 17:04-17:33","2 16:42-17:10","3 10:29-12:46","1 16:04-17:13","4 17:02-17:08","1 14:54-15:33","5 13:52-16:21","3 09:39-13:03","3 11:45-12:44","4 09:11-09:54","2 16:27-17:28","4 11:27-16:04","4 08:41-13:55","5 10:30-15:34","5 14:39-17:37","2 14:49-14:52","2 13:32-17:50","5 08:32-17:49","5 12:44-13:21","1 13:54-14:14","5 14:20-16:33","3 08:09-12:42","1 08:57-14:48","5 17:29-17:32","1 10:28-16:18","4 10:23-13:32","1 16:14-16:18","3 10:43-11:09","4 10:57-11:27","4 16:32-17:50","2 14:30-15:19","2 12:48-13:06","5 08:24-11:03","3 15:29-17:48","4 11:30-17:42","5 13:06-16:22","5 14:50-16:22","3 10:03-11:54","3 11:29-12:50","2 16:53-17:37","1 15:31-15:51","5 16:36-17:51","4 12:14-17:28","2 09:29-13:48","4 15:46-17:19","1 12:21-15:35","1 15:23-16:08","1 16:07-16:38","4 12:06-12:14","5 13:38-15:18","2 15:45-15:45","4 17:16-17:17","5 11:51-16:04","1 13:38-16:40","3 14:26-17:41","5 17:40-17:52","1 09:23-13:43","4 14:42-17:00","2 09:34-15:04","1 11:03-15:39","1 11:27-14:23","5 13:49-15:41","4 14:47-17:40","1 17:24-17:29","3 14:37-16:46","1 10:17-13:28","4 09:37-16:11","1 09:33-16:47","1 09:51-13:16","5 14:21-15:49","5 17:09-17:33","5 12:19-16:50","3 10:50-13:00","5 08:24-10:49","5 13:30-13:49","4 14:39-15:40","4 16:37-17:57","2 09:08-09:15","4 14:19-17:17","5 08:32-13:07","2 10:28-14:18","3 09:34-12:49","2 10:44-11:59","1 17:19-17:58","2 12:11-12:35","4 14:43-17:26","2 15:30-16:47","1 08:46-16:06","5 10:54-15:45","5 14:16-16:44","3 10:51-10:52","3 16:15-17:49","3 10:04-12:00","1 10:57-11:40","5 12:04-16:24","1 10:54-13:17","3 17:25-17:48","2 11:00-12:38","4 13:12-14:05","3 12:30-12:54","2 12:20-14:47"];
            assert.exists(scheduleMeeting(input), "3 13:18-14:17");
        });
    })

})
