--Clientes
CREATE SEQUENCE public.clientes_seq_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
CREATE TABLE public.clientes (
	id int4 NOT NULL DEFAULT nextval('public.clientes_seq_id'::regclass),
	nombres varchar NULL,
	apellidos varchar NULL,
	direccion varchar NULL,
	email varchar NULL,
	password varchar NULL,
	rol_id int4 NULL	
);
CREATE UNIQUE INDEX clientes_id_idx ON public.clientes USING btree (id);
INSERT INTO public.clientes(nombres, apellidos, direccion, email, password, rol_id) VALUES('Wilberth', 'Balam', 'Conocido', 'wil.admin.com', '12345', 1);
INSERT INTO public.clientes(nombres, apellidos, direccion, email, password, rol_id) VALUES('Wilberth', 'Balam', 'Conocido', 'wil.cliente.com', '12345', 2);

--Tienda
CREATE SEQUENCE public.tienda_seq_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
CREATE TABLE public.tiendas (
	id int4 NOT NULL DEFAULT nextval('public.tienda_seq_id'::regclass),
	sucursal varchar NULL,
	direccion varchar NULL	
);
CREATE UNIQUE INDEX tienda_id_idx ON public.tiendas USING btree (id);

--Articulos
CREATE SEQUENCE public.articulo_seq_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
CREATE TABLE public.articulos (
	id int4 NOT NULL DEFAULT nextval('public.articulo_seq_id'::regclass),
	codigo varchar NULL,
	descripcion varchar NULL,
	precio numeric(10,2) NULL,	
	imagen varchar NULL,
	stock int4 NULL,
	tienda_id int4 NULL
);
CREATE UNIQUE INDEX articulo_id_idx ON public.articulos USING btree (id);

--Carritos
CREATE SEQUENCE public.carrito_seq_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
CREATE TABLE public.carritos (
	id int4 NOT NULL DEFAULT nextval('public.carrito_seq_id'::regclass),
	cliente_id int4 NULL,	
	monto_total numeric(10,2) NULL,	
	fecha_compra timestamp NULL
);
CREATE UNIQUE INDEX carrito_id_idx ON public.carritos USING btree (id);

--Carritos items
CREATE SEQUENCE public.carrito_items_seq_id
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
CREATE TABLE public.carrito_items (
	id int4 NOT NULL DEFAULT nextval('public.carrito_items_seq_id'::regclass),
	carrito_id int4 NULL,
	articulo_id int4 NULL,	
	monto numeric(10,2) NULL,	
	cantidad int4 NULL
);
CREATE UNIQUE INDEX carrito_items_id_idx ON public.carrito_items USING btree (id);
