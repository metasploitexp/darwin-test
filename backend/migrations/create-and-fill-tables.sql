-- удаление таблиц если уже существуют
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS models;
DROP TABLE IF EXISTS shops;
DROP TABLE IF EXISTS brands;

-- Создание таблиц сущностей и таблицы связей
create table brands
    (
        id serial primary key,
        name varchar(255) not null unique
    );

create table models
    (
        id serial primary key,
        brand_id int not null references brands (id),
        name varchar(255) not null,
        unique (brand_id, name)
    );

create table shops
    (
        id serial primary key,
        name varchar(255) not null,
        phone varchar(255) not null,
        UNIQUE (name, phone)
    );

create table cars
    (
        id serial primary key,
        model_id int not null references models (id),
        shop_id int not null references shops (id),
        price int not null
    );

-- заполнение таблиц первоначальными данными
insert into
    brands (name)
values
    ('Toyota'),
    ('Lada'),
    ('Chery'),
    ('Kia'),
    ('Mazda');

insert into
    models (brand_id, name)
values
    (1, 'RAV4'),
    (1, 'Camry'),
    (2, 'Granta'),
    (3, 'Tiggo 7 Pro'),
    (4, 'Sportage'),
    (5, 'CX-5');

insert into
    shops (name, phone)
values
    ('Автомир', '+7 495 345 76 44'),
    ('Диавто', '+7 903 567 99 88'),
    ('Автомир', '+7 843 600 39 49'),
    ('Дром', '+7 905 890 66 55'),
    ('Авто.ру', '+7 912 456 78 99'),
    ('АвтоГермес', '+7 843 320 44 25'),
    ('Авто.ру', '+7 912 456 55 29');

insert into
    cars (model_id, shop_id, price)
values
    (1, 1, 2559000),
    (2, 2, 2358000),
    (3, 3, 1980000),
    (4, 4, 5720000),
    (2, 4, 2120000),
    (5, 5, 2633000),
    (3, 6, 2230000),
    (6, 7, 3180000);



