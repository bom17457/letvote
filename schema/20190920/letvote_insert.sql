INSERT INTO letvote.join_topic (topic_id, student_id) VALUES(1, '025930461038-1');
INSERT INTO letvote.login (token, status, student_id, create_datetime) VALUES('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'login', '1', current_timestamp());
INSERT INTO letvote.`role` (`role`) VALUES('voter');
INSERT INTO letvote.student (id, fname, lname, username, password, `role`, status, create_datetime) VALUES('025930461038-1', 'Akaporn', 'Katip', 'bom43531', '$2y$12$gpnQAs07fbu7d7GApX022.7so21gvlssE4aEK0Dy62BmYttI2HnWm', 1, 'enable', current_timestamp());
INSERT INTO letvote.topic (name, start_vote_datetime, end_vote_datetime, status, create_datetime, student_id) VALUES('Election Activity Leader', '2019-09-22 11:01:50', '2019-10-22 11:01:50', 'Open', current_timestamp(), '025930461038-1');
INSERT INTO letvote.vote_topic (topic_id, student_id, candidate_id, create_datetime) VALUES(1, '025930461038-1', '025930461038-2', current_timestamp());
