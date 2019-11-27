/****** Object:  Table [dbo].[employees]    Script Date: 11/25/2019 5:59:42 PM ******/
DROP TABLE [dbo].[employees]
GO

/****** Object:  Table [dbo].[employees]    Script Date: 11/25/2019 5:59:43 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[employees](
	[ID] [int] NOT NULL,
	[name] [varchar](50) NOT NULL,
	[surname] [varchar](50) NOT NULL,
	[title] [varchar](50) NOT NULL,
	[date_of_birth] [date] NOT NULL,
	[gender] [tinyint] NOT NULL,
	[date_of_hire] [date] NOT NULL
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[shifts]    Script Date: 11/25/2019 6:40:21 PM ******/
DROP TABLE [dbo].[shifts]
GO

/****** Object:  Table [dbo].[shifts]    Script Date: 11/25/2019 6:40:21 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[shifts](
	[ID] [int] NOT NULL,
	[employeeID] [int] NOT NULL,
	[work_date] [date] NOT NULL,
	[start_work_hour] [decimal](5, 3) NOT NULL,
	[end_work_hour] [decimal](5, 3) NOT NULL,
	[is_holiday] [bit] NOT NULL,
	[is_weekend] [bit] NOT NULL
) ON [PRIMARY]
GO





