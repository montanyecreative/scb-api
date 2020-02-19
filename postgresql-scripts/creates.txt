CREATE TABLE RECIPES (
    ID              SERIAL          PRIMARY KEY     NOT NULL, 
    name            VARCHAR(250)                    NOT NULL,
    description     VARCHAR(10000),
    totalTime       INTEGER,
    category        VARCHAR(100),
    flavorProfile   VARCHAR(100),
    image           VARCHAR(1000),
    ingredientID    INT             references      INGREDIENTS(ID),
    toolID          INT             references      TOOLS(ID)
);

CREATE TABLE INGREDIENTS (
    ID              SERIAL   PRIMARY KEY   NOT NULL, 
    name            VARCHAR(250) NOT NULL
);

CREATE TABLE TOOLS (
    ID              SERIAL   PRIMARY KEY   NOT NULL, 
    name            VARCHAR(250) NOT NULL
);