
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(500) NOT NULL,
  `status` varchar(10) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
CREATE TABLE `role` (  
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `user` (
  `id` varchar(20) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` varchar(50) NOT NULL,
  `status` varchar(10) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_FK` (`role`),
  CONSTRAINT `user_FK` FOREIGN KEY (`role`) REFERENCES `role` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `start_vote_datetime` datetime NOT NULL,
  `end_vote_datetime` datetime NOT NULL,
  `status` varchar(10) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_FK` (`user_id`),
  CONSTRAINT `topic_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
CREATE TABLE `candidate_join_topic` (
  `topic_id` int(11) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  PRIMARY KEY (`topic_id`,`user_id`),
  KEY `candidate_join_topic_FK` (`user_id`),
  CONSTRAINT `candidate_join_topic_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `candidate_join_topic_FK_1` FOREIGN KEY (`topic_id`) REFERENCES `topic` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `vote_topic` (
  `topic_id` int(11) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `candidate_id` varchar(20) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`topic_id`,`user_id`,`candidate_id`),
  KEY `vote_topic_FK` (`user_id`),
  CONSTRAINT `vote_topic_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `vote_topic_FK_1` FOREIGN KEY (`topic_id`, `candidate_id`) REFERENCES `candidate_join_topic` (`topic_id`, `user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;