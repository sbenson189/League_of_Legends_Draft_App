DROP DATABASE IF EXISTS drafts_db;

CREATE DATABASE drafts_db;

\c drafts_db;

CREATE TABLE drafts (
    id SERIAL PRIMARY KEY,
    blue_pick1 text NOT NULL,
    blue_pick2 text NOT NULL,
    blue_pick3 text NOT NULL,
    blue_pick4 text NOT NULL,
    blue_pick5 text NOT NULL,
    red_pick1 text NOT NULL,
    red_pick2 text NOT NULL,
    red_pick3 text NOT NULL,
    red_pick4 text NOT NULL,
    red_pick5 text NOT NULL,
    blue_ban1 text NOT NULL,
    blue_ban2 text NOT NULL,
    blue_ban3 text NOT NULL,
    blue_ban4 text NOT NULL,
    blue_ban5 text NOT NULL,
    red_ban1 text NOT NULL,
    red_ban2 text NOT NULL,
    red_ban3 text NOT NULL,
    red_ban4 text NOT NULL,
    red_ban5 text NOT NULL
);

INSERT INTO drafts
    ( 
        blue_pick1,
        blue_pick2,
        blue_pick3,
        blue_pick4,
        blue_pick5,
        red_pick1,
        red_pick2,
        red_pick3,
        red_pick4,
        red_pick5,
        blue_ban1,
        blue_ban2,
        blue_ban3,
        blue_ban4,
        blue_ban5,
        red_ban1,
        red_ban2,
        red_ban3,
        red_ban4,
        red_ban5
    )
    
VALUES
    (  
        'Aatrox',
        'Ahri',
        'Akali',
        'Alistar',
        'Amumu',
        'Anivua', 
        'Annie', 
        'Aphelios', 
        'Ashe', 
        'AurelionSol', 
        'Azir', 
        'Bard', 
        'BliztCrank', 
        'Brand', 
        'Caitlyn', 
        'Camille',
        'Cassiopeia',
        'Chogath',
        'Corki',
        'Darius'
    );


