/****** Object:  Table [dbo].[employees]    Script Date: 11/25/2019 5:59:42 PM ******/
DROP TABLE dbo.EmployeeDayoffRelation
DROP TABLE [dbo].[EmployeeShiftsRelation]
DROP TABLE [dbo].[users]
DROP TABLE [dbo].[shifts]
DROP TABLE [dbo].[dayoff]
DROP TABLE [dbo].[employees]

CREATE TABLE [dbo].[dayoff](
	[ID] [int] NOT NULL PRIMARY KEY,
	[reason] [nchar](10) NOT NULL,
	[additional_description] [varchar](50) NULL,
	[confirmation] [bit] NOT NULL,
	[shifts_ID][int]NOT NULL,
)

CREATE TABLE [dbo].[employees](
	[ID] [int] NOT NULL IDENTITY PRIMARY KEY,
	[name] [varchar](50) NOT NULL,
	[surname] [varchar](50) NOT NULL,
	[title] [varchar](50) NOT NULL,
	[date_of_birth] [date] NOT NULL,
	[gender] [tinyint] NOT NULL,
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
	[ID] [int] NOT NULL PRIMARY KEY,
	[username] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[employee_ID] [int] NOT NULL CONSTRAINT FK_users_employees UNIQUE FOREIGN KEY 
	REFERENCES dbo.employees (ID)
) 


CREATE TABLE [dbo].[shifts](
	[ID] [int] NOT NULL PRIMARY KEY,
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