
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
  PRIMARY KEY (`id`, `username`),
  KEY `user_FK` (`role`),
  CONSTRAINT `user_FK` FOREIGN KEY (`role`) REFERENCES `role` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `election` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `topic` varchar(35) NOT NULL,
  `description` varchar(70) NULL,
  `displaytext` varchar(35) NULL,
  `start_register_datetime` datetime NOT NULL,
  `end_register_datetime` datetime NOT NULL,
  `start_vote_datetime` datetime NOT NULL,
  `end_vote_datetime` datetime NOT NULL,
  `status` varchar(10) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  `user_id` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `election_FK` (`user_id`),
  CONSTRAINT `election_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
CREATE TABLE `candidate_join_election` (
  `election_id` int(11) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  PRIMARY KEY (`election_id`,`user_id`),
  KEY `candidate_join_election_FK` (`user_id`),
  CONSTRAINT `candidate_join_election_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `candidate_join_election_FK_1` FOREIGN KEY (`election_id`) REFERENCES `election` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `vote_election` (
  `election_id` int(11) NOT NULL,
  `user_id` varchar(20) NOT NULL,
  `candidate_id` varchar(20) NOT NULL,
  `create_datetime` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`election_id`,`user_id`,`candidate_id`),
  KEY `vote_election_FK` (`user_id`),
  CONSTRAINT `vote_election_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `vote_election_FK_1` FOREIGN KEY (`election_id`, `candidate_id`) REFERENCES `candidate_join_election` (`election_id`, `user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;