USE [Ilion]
GO
/****** Object:  Table [dbo].[roles]    Script Date: 12/11/2019 08:09:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[roles](
	[id_rol] [int] IDENTITY(1,1) NOT NULL,
	[rol] [varchar](45) NOT NULL,
	[observaciones] [varchar](45) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_rol] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tipo_identificacion]    Script Date: 12/11/2019 08:09:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tipo_identificacion](
	[id_ident] [int] IDENTITY(1,1) NOT NULL,
	[nom_ident] [varchar](45) NULL,
PRIMARY KEY CLUSTERED 
(
	[id_ident] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[usuarios]    Script Date: 12/11/2019 08:09:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[usuarios](
	[id_registro] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](45) NULL,
	[email] [varchar](45) NULL,
	[id_ident] [int] NULL,
	[num_ident] [varchar](45) NULL,
	[contraseña] [varchar](45) NULL,
	[id_rol] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id_registro] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
