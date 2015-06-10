# Data Modelling and Persistence

Applications needs a way of storing and manipulating data, that is what databases are for. Databases makes 
it easy to store, structure, retrieve and manage data.

## Database basics

Databases put data that belongs together in tables, each table have multiple entries with is called rows and 
each row have multiple fields.

One can link tables using fields, by creating a field in one table and referencing that field 
from another table. These ields are used to create relationships between tables, that's why it is called relational databases.

### Database components

* Tables
* Rows
* Fields
* Keys
 * Primary key - a field that makes a row unique
 * Foreign key - a field that reference a key in another table

## Data Modelling

The process of creating a set of data entities that describes a problem domain is called Data Modelling. When creating a data model one looks at what different entities needs to be stored and how they relate to each other. Entities are created as tables that contains rows, each row contains some fields which is the specific data that is stored and fields are used as keys (foreign keys) to map relationships between entities.

Look at this scenario:

> As as Taxi Owner I would like to see who is driving my taxi's and on which routes.

Answer these questions:
  * For what entities do we need to store data?
  * What data do we need for each entity?
  * How do the entities relate to each other?

Once the above questions are answered one have the basic information for creating a data model. Once one have a data model one can create a database. 

## SQL

Once one have a database one needs a way of manipulating the data in the database. One needs to be able to insert, query, update and delete the data, this is where SQL comes in.

SQL stands for Structured Query Language, it's a data manipulation language that allows one to easily find (query) and create data. SQL have 4 basic operations insert, delete, update and select. The ```select``` operation being the one to find existing datat in the database the other operations are self explenatory. One use the fields in the tables to link tables together.

## CRUD - create, read, update and delete

One can use SQL to create some CRUD screens to manipulates data.

## Learn it

Now that you have a basic high level understanding of database bases and SQL work your way through this tutorial:

http://www.sqlteaching.com/

http://sql.learncodethehardway.org/

## Aggregating data

Once your data is in a database you can use it to calculate aggregates like averages, max or min values.

Some more details:

* http://www.sqlclauses.com/sql+aggregate+functions/
* http://www.mysqltutorial.org/mysql-aggregate-functions.aspx
* http://www.techotopia.com/index.php/MySQL_Data_Aggregation_Functions

## MySQL

For our project we would like to use MySQL which is an open source database that is used widely.

Here is a basic tutorial to get going:

https://www.digitalocean.com/community/tutorials/a-basic-mysql-tutorial

## Data model & CRUD for Nelisa

Now use your database knowledge to:

* create a data model for Nelisa's Spaza Shop
* create a MySQL database this datamodel
* import the CSV files you have from Nelisa into the database
* change your web application to use the database

### Import data using a sqldump file:

One can use the ```mysqldump``` utility to export and import data into a database. There is a mysql dump file added to  this repository that you can use as a starting point for your Nelisa's database, it's called ```Spaza-MySQL-Dump.sql```. 

You can use it like this

Type in the terminal:

```
mysql -u root -p
```

Then do:

```
mysql> create database <you db name>;
mysql> use <your db name>;
mysql> source Spaza-MySQL-Dump.sql;
```

You can import the dump file from the terminal using ```mysqldump``` as well.

After importing the dump file into your database you should have two tables in your database:
* sales_csv
* stock_purchases_csv


> Aggregate functions will be very usefull.

Here is a basic CRUD overview:

https://github.com/codex-academy/codeX_BasicCRUDExample

## Node database packages:

https://www.npmjs.com/package/sqlite3

https://www.npmjs.com/package/mysql
