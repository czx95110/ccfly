SET NAMES UTF8;
DROP DATABASE IF EXISTS ccfly;
CREATE DATABASE ccfly CHARSET=UTF8;
USE ccfly;

CREATE TABLE my_book(
	book_id INT PRIMARY KEY AUTO_INCREMENT,
	book_name VARCHAR(40) NOT NULL,
	book_author VARCHAR(30),
	book_transfer VARCHAR(60),
	book_press VARCHAR(90),
	book_version VARCHAR(10)
);
INSERT INTO my_book VALUES
	(NULL,"JavaScript权威指南","David Flanagan","淘宝前端团队","机械工业出版社","第6版"),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"JavaScript高级程序设计","Nicholas C.Zakas","李松峰 曹力","人民邮电出版社",'第3版'),
	(NULL,"编写可维护的JavaScript","Nicholas C.Zakas","李晶 郭凯 张散集","人民邮电出版社",'');

