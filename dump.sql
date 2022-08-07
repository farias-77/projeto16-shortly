--
-- PostgreSQL database dump
--

-- Dumped from database version 13.7 (Ubuntu 13.7-0ubuntu0.21.10.1)
-- Dumped by pg_dump version 13.7 (Ubuntu 13.7-0ubuntu0.21.10.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_id_seq OWNER TO postgres;

--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "userId" integer NOT NULL,
    visits integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.urls OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO postgres;

--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, "userId", token, "createdAt") FROM stdin;
4	15	7fed9e4d-f719-454c-ba84-507185a5bfc8	2022-08-04 14:14:19.778509
5	16	ba88c157-9a2f-49e7-b7b3-e340a4ef2d9d	2022-08-04 14:17:04.705798
6	5	54cbb99c-8082-4eaf-905c-ae13d9f99894	2022-08-04 14:18:51.539836
7	17	fccc3c67-2637-403f-b8e9-040b395cd4dc	2022-08-04 14:19:34.393792
\.


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.urls (id, url, "shortUrl", "userId", visits, "createdAt") FROM stdin;
30	https://www.samsung.com	u49E4RsZskdy-HekRXeRq	17	0	2022-08-04 14:19:51.444625
31	https://www.lenovo.com	X8cT34LDY6vIGblbxDbzS	17	17	2022-08-04 14:19:58.620188
23	https://www.google234.com	9KhmV8a35tQBbmnC_pwED	5	0	2022-08-03 16:36:12.283191
24	https://www.google2345.com	6iwoCLOZiCC9H8NDe3KKH	5	0	2022-08-03 16:36:14.073534
21	https://www.google2.com	4T1Xd8lmh90MgE3KKaHxP	5	1	2022-08-03 16:36:09.015999
22	https://www.google23.com	4jWAHWoJbznkJVaAMjfRz	5	1	2022-08-03 16:36:10.719685
25	https://www.google23456.com	pwy5uUAjYoSeZQFGRq2rR	5	1	2022-08-03 16:36:16.210341
20	https://www.google.com	rux-SsXeT6QoaUJOBSo3r	5	7	2022-08-03 16:36:04.202381
26	https://www.netflix.com	GxleXO6_VaB22EB_mf365	15	5	2022-08-04 14:15:14.94142
27	https://www.nike.com	BFz5f5LM1eVAE-MFpjdrW	16	4	2022-08-04 14:17:24.385532
28	https://www.adidas.com	GhpQGEeG7EMXbFhwvxvHx	16	5	2022-08-04 14:17:45.613223
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
5	Gabriel	gabriel@gmail.com	$2b$10$Kkyp3fRqt6kiHs6DhO2d.egyH9JWfyANXyw0Lk47E8.Z2Kki8sTDy	2022-08-02 16:16:28.701894
15	Gabriel2	gabriel2@gmail.com	$2b$10$b/0i0XysPjvJATf5Y.g47./S3XSUU87Df85NL5meM8Op5FgKb53T.	2022-08-04 14:14:12.707434
16	Gabriel23	gabriel23@gmail.com	$2b$10$wQC5BtPJ16WlRcc4BTchH.MR.Qr8WCnturfMjCA4WVpeS9ox.PYYq	2022-08-04 14:17:01.910186
17	Gabriel234	gabriel234@gmail.com	$2b$10$Blu3eoQjBdNQMCStaaYP2..MstVeIay1jY5hXTuUYpX2ZdZWDD9Ra	2022-08-04 14:19:24.900661
18	Gabriel2345	gabriel2345@gmail.com	$2b$10$djtctbvGB4iLz0BW/4PqFu813fraltaow3rCqSplPysfdq2corbSO	2022-08-04 14:20:34.855277
19	Gabriel23456	gabriel23456@gmail.com	$2b$10$JGHFkwXOdr9fkgTdCjyjcurjiPvdrgxkof01w0el8Ni9b/E1Mg0Je	2022-08-04 14:20:41.735546
20	Gabriel234567	gabriel234567@gmail.com	$2b$10$yGriO.yq524v/K.X3pdSr.7ziudKtKSa3sf3jLcEt/KT7xkfO8gIK	2022-08-04 14:20:45.444895
21	Gabriel2345678	gabriel2345678@gmail.com	$2b$10$bvIe0p00L8ibkuHEKsyw.O7WIjjpXLIcp6JtnR6424GGH/X6WkZC6	2022-08-04 14:20:49.28657
22	Gabriel23456789	gabriel23456789@gmail.com	$2b$10$H7tQ.SsO69Xa9ohQht2pDuAEEvrJ57fvYrOC5CdfGzoEwv8IrDTXu	2022-08-04 14:20:53.853252
23	Gabriel2345678910	gabriel2345678910@gmail.com	$2b$10$ALedBRvtm2R/jztpORlCxOQ.DV8WgwFnX8JytAIKyRSCNzzdWfx6a	2022-08-04 14:20:59.98682
24	Gabriel234567891011	gabriel234567891011@gmail.com	$2b$10$8wcQh99tbYqvAlW4ZdqWouyI9uoNTjo6eYesLEYKcYMFtDtPqURuG	2022-08-04 14:21:03.569286
25	Gabriel23456789101112	gabriel23456789101112@gmail.com	$2b$10$9Jmx0vnF/djBBwe7KlfpiOJe7YIn/XjnVNfpauYCzll.0HbFH7.Ei	2022-08-04 14:21:07.183621
\.


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sessions_id_seq', 7, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.urls_id_seq', 31, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 25, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: sessions sessions_userId_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_key" UNIQUE ("userId");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: urls urls_url_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_url_key UNIQUE (url);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

