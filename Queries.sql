---Droppin' the tables & sequences---

DROP TABLE dbo.EmployeeDayoffRelation
DROP TABLE [dbo].[EmployeeShiftsRelation]
DROP TABLE [dbo].[users]
DROP TABLE [dbo].[shifts]
DROP TABLE [dbo].[dayoff]
DROP TABLE [dbo].[employees]
DROP SEQUENCE dbo.seq_users
---Creating the tables---

CREATE TABLE [dbo].[dayoff](
	[ID] [int] NOT NULL PRIMARY KEY IDENTITY,
	[reason] [nchar](10) NOT NULL,
	[additional_description] [varchar](50) NULL,
	[confirmation] [bit] NOT NULL,
	[start_date][date] NOT NULL,
	[end_date][date] NOT NULL,
	[shifts_ID][int]NOT NULL
)

CREATE TABLE [dbo].[employees](
	[ID] [int] NOT NULL IDENTITY PRIMARY KEY,
	[name] [varchar](50) NOT NULL,
	[surname] [varchar](50) NOT NULL,
	[date_of_birth] [date] NOT NULL,
	[gender] [bit] NOT NULL, ---|||| 0 --> woman; 1 --> man ||||---
	[date_of_hire] [date] NOT NULL,
	[email] [varchar](50) NOT NULL,
	
	
)

CREATE TABLE [dbo].[EmployeeDayoffRelation](
    employee_ID int NOT NULL,
    dayoff_ID int NOT NULL,
	FOREIGN KEY (employee_ID) REFERENCES employees(ID), 
    FOREIGN KEY (dayoff_ID) REFERENCES dayoff(ID)
);

CREATE TABLE [dbo].[users](
	[ID] [int] NOT NULL PRIMARY KEY IDENTITY,
	[username] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[employee_ID] [int] NOT NULL CONSTRAINT FK_users_employees UNIQUE FOREIGN KEY 
	REFERENCES dbo.employees (ID)
) 


CREATE TABLE [dbo].[shifts](
	[ID] [int] NOT NULL PRIMARY KEY IDENTITY,
	[work_date] [date] NOT NULL,
	[start_work_hour] [decimal](5, 3) NOT NULL,
	[end_work_hour] [decimal](5, 3) NOT NULL,
	[dayoff_ID] [int] NOT NULL,
	CONSTRAINT FK_shifts_dayoff FOREIGN KEY (dayoff_ID)
    REFERENCES dbo.dayoff(ID)
)


CREATE TABLE [dbo].[EmployeeShiftsRelation](
    employee_ID int NOT NULL,
    shifts_ID int NOT NULL,
	FOREIGN KEY (employee_ID) REFERENCES employees(ID), 
    FOREIGN KEY (shifts_ID) REFERENCES shifts(ID)
);


---Creating the inserts---

INSERT INTO dbo.employees(
	name,
	surname,
	date_of_birth,
	gender,
	date_of_hire,
	email
)
VALUES 
	('Lars','Monsen', '1968-12-17', 1, '2005-12-17', 'larsmonsen@food.com'),
	('John','Smith', '1965-11-07', 1, '2008-11-10', 'johnsmith@food.com'),
	('Serena','Johnson', '1989-10-27', 0, '2013-01-02', 'serenajohnson@food.com'),
	('Elizabeth','Williams', '1959-05-10', 0, '2002-09-20', 'elizabethwilliams@food.com'),
	('Timothy','Brown', '2000-11-08', 1, '2018-09-09', 'timothybrown@food.com'),
	('Jack','Jones', '2001-01-01', 1, '2019-03-05', 'jackjones@food.com'),
	('David','Miller', '1996-12-31', 1, '2014-11-15', 'davidmiller@food.com'),
	('Gregor','Davis', '1993-09-23', 1, '2010-11-09', 'gregordavis@food.com'),
	('Millena','Lopez', '1983-06-08', 0, '2010-11-25', 'millenalopez@food.com'),
	('Ann','Anderson', '1995-11-01', 0, '2019-01-01', 'annanderson@food.com'),
	---10---
	('Thomas','Cook', '1990-06-20', 1, '2011-01-02', 'thomascook@food.com'),
	('Davis','Moore', '1994-08-09', 1, '2019-06-05', 'davismoore@food.com'),
	('George','Trivial', '1989-11-23', 1, '2015-10-17', 'georgetrivial@food.com'),
	('John','Mayer', '1978-11-29', 1, '2007-09-07', 'johnmayer@food.com'),
	('Jane','Austin', '1967-11-11', 0, '2000-11-15', 'janeaustin@food.com')
	;---15---

CREATE SEQUENCE seq_users
MINVALUE 1
START WITH 1
INCREMENT BY 1
CACHE 1000
cycle;
	
INSERT INTO dbo.users
(
username,
password
)

VALUES
('user' + CONVERT(varchar,NEXT VALUE FOR seq_users), 
CONVERT(varchar,NEXT VALUE FOR seq_users))
;

/*ALTER TABLE dbo.users
ADD CONSTRAINT FK_users_employees FOREIGN KEY (employee_ID)
        REFERENCES dbo.employees (ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE

ALTER TABLE dbo.employees
ADD CONSTRAINT FK_employees_shifts FOREIGN KEY (shifts_ID)
        REFERENCES dbo.shifts (ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE

ALTER TABLE dbo.dayoff
ADD CONSTRAINT FK_dayoff_shifts FOREIGN KEY (dayoff_ID)
        REFERENCES dbo.shifts (ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE*/