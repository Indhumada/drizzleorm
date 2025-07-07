
CREATE TABLE "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"product" varchar(255) NOT NULL,
	"amount" integer NOT NULL
	 
);  

CREATE TABLE "payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"order_id" integer NOT NULL,
	"method" varchar(255) NOT NULL,
	"status" varchar(255) NOT NULL
);


CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" integer NOT NULL
);

DROP TABLE "crud_driz" CASCADE;   