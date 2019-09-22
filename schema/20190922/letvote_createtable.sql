
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(500) NOT NULL,
  `status` varchar(10) NOT NULL,
  `student_id` varchar(20) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
CREATE TABLE `student` (
  `id` varchar(20) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `student_FK` (`role`),
  CONSTRAINT `student_FK` FOREIGN KEY (`role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `start_vote_datetime` datetime NOT NULL,
  `end_vote_datetime` datetime NOT NULL,
  `status` varchar(10) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  `student_id` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_FK` (`student_id`),
  CONSTRAINT `topic_FK` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
CREATE TABLE `candidate_join_topic` (
  `topic_id` int(11) NOT NULL,
  `student_id` varchar(20) NOT NULL,
  PRIMARY KEY (`topic_id`,`student_id`),
  KEY `candidate_join_topic_FK` (`student_id`),
  CONSTRAINT `candidate_join_topic_FK` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),
  CONSTRAINT `candidate_join_topic_FK_1` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `vote_topic` (
  `topic_id` int(11) NOT NULL,
  `student_id` varchar(20) NOT NULL,
  `candidate_id` varchar(20) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`topic_id`,`student_id`,`candidate_id`),
  KEY `vote_topic_FK` (`student_id`),
  CONSTRAINT `vote_topic_FK` FOREIGN KEY (`student_id`) REFERENCES `student` (`id`),
  CONSTRAINT `vote_topic_FK_1` FOREIGN KEY (`topic_id`, `candidate_id`) REFERENCES `candidate_join_topic` (`topic_id`, `student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;