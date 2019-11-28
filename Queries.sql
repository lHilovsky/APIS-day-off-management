/****** Object:  Table [dbo].[employees]    Script Date: 11/25/2019 5:59:42 PM ******/
DROP TABLE [dbo].[users]
GO
DROP TABLE [dbo].[employees]
GO
DROP TABLE [dbo].[dayoff]
GO
DROP TABLE [dbo].[shifts]
GO

/****** Object:  Table [dbo].[employees]    Script Date: 11/25/2019 5:59:43 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[employees](
	[ID] [int] NOT NULL PRIMARY KEY,
	[name] [varchar](50) NOT NULL,
	[surname] [varchar](50) NOT NULL,
	[title] [varchar](50) NOT NULL,
	[date_of_birth] [date] NOT NULL,
	[gender] [tinyint] NOT NULL,
	[date_of_hire] [date] NOT NULL,
	[email] [varchar](50) NOT NULL,
	[shifts_ID] [int] NOT NULL
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[shifts]    Script Date: 11/25/2019 6:40:21 PM ******/


/****** Object:  Table [dbo].[shifts]    Script Date: 11/25/2019 6:40:21 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[shifts](
	[ID] [int] NOT NULL PRIMARY KEY,
	[employeeID] [int] NOT NULL,
	[work_date] [date] NOT NULL,
	[start_work_hour] [decimal](5, 3) NOT NULL,
	[end_work_hour] [decimal](5, 3) NOT NULL,
) ON [PRIMARY]
GO


/****** Object:  Table [dbo].[user]    Script Date: 11/28/2019 4:17:22 PM ******/


/****** Object:  Table [dbo].[user]    Script Date: 11/28/2019 4:17:22 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[users](
	[ID] [int] NOT NULL,
	[username] [varchar](50) NOT NULL,
	[password] [varchar](50) NOT NULL,
	[date] [date] NOT NULL,
	[update_date] [date] NOT NULL,
	[employee_ID] [int] NOT NULL,
		
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[dayoff]    Script Date: 11/28/2019 4:25:47 PM ******/


/****** Object:  Table [dbo].[dayoff]    Script Date: 11/28/2019 4:25:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[dayoff](
	[ID] [int] NOT NULL,
	[reason] [nchar](10) NOT NULL,
	[additional_description] [varchar](50) NULL,
	[confirmation] [bit] NOT NULL,
	[dayoff_ID][int]NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE dbo.users
ADD CONSTRAINT FK_user_employees FOREIGN KEY (employee_ID)
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
        ON UPDATE CASCADE