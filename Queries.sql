---Droppin' the tables & sequences---

DROP TABLE dbo.EmployeeDayoffsRelations
DROP TABLE [dbo].[EmployeeShiftsRelations]
DROP TABLE [dbo].[users]
DROP TABLE [dbo].[shifts]
DROP TABLE [dbo].[dayoffs]
DROP TABLE [dbo].[employees]
---Creating the tables---

CREATE TABLE [dbo].[dayoffs](
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

CREATE TABLE [dbo].[EmployeeDayoffsRelations](
	[ID] INT IDENTITY NOT NULL,
    employee_ID int NOT NULL,
    dayoffs_ID int NOT NULL,
	FOREIGN KEY (employee_ID) REFERENCES employees(ID), 
    FOREIGN KEY (dayoffs_ID) REFERENCES dayoffs(ID),
	PRIMARY KEY CLUSTERED ([ID] ASC)
);

CREATE TABLE [dbo].[users](
	[ID] [int] NOT NULL PRIMARY KEY IDENTITY,
	[username] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[isManager] [bit] NOT NULL, --- 0-NO 1-YES ---
	[employee_ID] [int] NOT NULL CONSTRAINT FK_users_employees UNIQUE FOREIGN KEY 
	REFERENCES dbo.employees (ID)
) 


CREATE TABLE [dbo].[shifts](
	[ID] [int] NOT NULL PRIMARY KEY IDENTITY,
	[work_date] [date] NOT NULL,
	[start_work_hour] [decimal](5, 1) NOT NULL,
	[end_work_hour] [decimal](5, 1) NOT NULL
	
)


CREATE TABLE [dbo].[EmployeeShiftsRelations](
	[ID] INT IDENTITY NOT NULL,
    employee_ID int NOT NULL,
    shifts_ID int NOT NULL,
	FOREIGN KEY (employee_ID) REFERENCES employees(ID), 
    FOREIGN KEY (shifts_ID) REFERENCES shifts(ID),
	PRIMARY KEY CLUSTERED ([ID] ASC)
);


---Creating the inserts---

---Inserting values into employees table---

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

---Inserting and updating values into users table---

DECLARE @pass varchar(50) = 'nbu1234';
INSERT INTO dbo.users
(
username,
password,
employee_ID,
isManager
)
SELECT  dbo.employees.name + '.' + dbo.employees.surname, 
		@pass,
		dbo.employees.ID,
		0
FROM dbo.employees
;

UPDATE dbo.users
SET dbo.users.isManager = 1
WHERE dbo.users.ID = 1;

---Inserting values into shifts table---

DECLARE @d date='2019-12-01' 
WHILE @d<'2020-01-01'
    BEGIN
        INSERT INTO dbo.shifts(work_date,start_work_hour,end_work_hour) 
        VALUES (@d,10,22)					--inserting date
        SET @d=DATEADD(DAY,1,@d)	--movin' one day ahead
    END

UPDATE dbo.shifts
SET dbo.shifts.end_work_hour = 24
WHERE DAY(dbo.shifts.work_date) = 7 
	OR DAY(dbo.shifts.work_date) = 14
	OR DAY(dbo.shifts.work_date) = 21
	OR DAY(dbo.shifts.work_date) = 28;

---Inserting values into EmloyeeShiftRel table---
--neopakovanie zamestantnca, pracovnikov pridavat po 6,
--ak sa opakuje --> novy random, 
--ak sa neopakuje --> pridaj zamestannca
--ak je uz 6 zamestnancov, zvys sichtaID

DECLARE @rEmployee int = 1
DECLARE @rShifts int= 1
DECLARE @i int= 1

WHILE @rShifts < 32 --celkovy pocet dni v mesiaci
    BEGIN
		SET @i = 1
        WHILE @i < 7
			BEGIN
				IF (@rEmployee = 16 )
					BEGIN
						SET @rEmployee = 1
					END
				INSERT INTO dbo.EmployeeShiftsRelations(shifts_ID,employee_ID) 
				VALUES (@rShifts,@rEmployee)
				SET @rEmployee = @rEmployee + 1
				SET @i = @i + 1
			END
		SET @rShifts = @rShifts + 1
    END




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