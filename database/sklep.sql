-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Lis 24, 2023 at 08:18 PM
-- Wersja serwera: 10.4.28-MariaDB
-- Wersja PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sklep`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dane_do_wysylki`
--

CREATE TABLE `dane_do_wysylki` (
  `ID_USER` int(11) DEFAULT NULL,
  `imie_nazwisko` varchar(255) DEFAULT NULL,
  `adres` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `numer_telefonu` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dane_do_wysylki`
--

INSERT INTO `dane_do_wysylki` (`ID_USER`, `imie_nazwisko`, `adres`, `email`, `numer_telefonu`) VALUES
(1, 'Michał Kozak', 'Stary Bartków, 77', 'live.m851@gmail.com', NULL),
(57, 'Michał Kozak', 'Stary Bartków, 77', 'u19_michalkozak@zsp1.siedlce.pl', NULL),
(58, 'Michał Kozak', 'Żabokliki 12', 'duch-04@wp.pl', NULL),
(59, 'Jan Szczygieł', 'Stary Bartków, 77', 'pawel.k1975@wp.pl', NULL),
(60, 'Jan Kowal', 'Siedlce 8', 'polak@wp.pl', NULL),
(61, 'asda adada', 'adsad', 'wp@wp.pl', NULL),
(62, 'Jarek Kowalski', 'Warszawa 77', 'pracownik@wp.pl', NULL),
(63, 'Czarek Kliencki', 'Siedlce ul. Starowiejska 23', 'user@wp.pl', '408605231'),
(64, 'Jakub Koryski', 'Siedlce ul. Jana Pawła II 2', 'j.korsyski@kup.pl', '123456789');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dostawcy`
--

CREATE TABLE `dostawcy` (
  `Id_dostawcy` int(11) NOT NULL,
  `Nazwa` varchar(255) DEFAULT NULL,
  `Adres` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Cena` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dostawcy`
--

INSERT INTO `dostawcy` (`Id_dostawcy`, `Nazwa`, `Adres`, `Email`, `Cena`) VALUES
(1, 'InPost SzybkiKurier', 'ul. Kurierska 22', 'szybkikurier@inpost.com', 20.00),
(2, 'DPD Polska', 'ul. Kurierska 34', 'dpd@dpd.com', 7.75),
(3, 'InPost Logistic', 'ul. Logistyczna 56', 'logistic@inpost.com', 9.25),
(4, 'DPD Express', 'ul. Expressowa 78', 'express@dpd.com', 7.90),
(5, 'INPOST', 'ul. Inpostowa 11', 'express2@dpd.com', 1.00);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kategorie`
--

CREATE TABLE `kategorie` (
  `id_kategorii` int(11) NOT NULL,
  `nazwa_kategorii` varchar(255) NOT NULL,
  `opis_kategorii` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategorie`
--

INSERT INTO `kategorie` (`id_kategorii`, `nazwa_kategorii`, `opis_kategorii`) VALUES
(60, 'Sportowe', 'Buty przeznaczone do aktywności sportowej.'),
(61, 'Eleganckie', 'Buty o wysokim standardzie wykonania, idealne na specjalne okazje.'),
(62, 'Outdoor', 'Buty do użytku na zewnątrz, odporne na warunki atmosferyczne.'),
(63, 'Letnie', 'Lekkie buty idealne na lato, wykonane z przewiewnych materiałów.'),
(64, 'Buty trekkingowe', 'Buty dedykowane do turystyki górskiej i wędrówek.'),
(65, 'Sandały', 'Wygodne obuwie z odkrytymi palcami, idealne na upalne dni.'),
(66, 'Buty do biegania', 'Specjalistyczne buty sportowe do biegania.'),
(67, 'Buty robocze', 'Obuwie ochronne do pracy, zabezpieczające przed urazami.'),
(68, 'Buty dziecięce', 'Buty przeznaczone dla dzieci w różnym wieku.'),
(74, 'Buty dla facetów', ' Producentom butów szerokostopowych zależy na tym, aby ich modele były zarówno funkcjonalne, jak i modne.');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `parametry`
--

CREATE TABLE `parametry` (
  `id_parametru` int(11) NOT NULL,
  `typ_parametru` varchar(255) NOT NULL,
  `wartosc_parametru` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parametry`
--

INSERT INTO `parametry` (`id_parametru`, `typ_parametru`, `wartosc_parametru`) VALUES
(50, 'kolor', 'czerwony'),
(51, 'kolor', 'zielony'),
(52, 'kolor', 'niebieski'),
(53, 'kolor', 'żółty'),
(54, 'kolor', 'fioletowy'),
(55, 'rozmiar', '30'),
(56, 'rozmiar', '35'),
(57, 'rozmiar', '40'),
(58, 'rozmiar', '45'),
(59, 'rozmiar', '50'),
(60, 'kolor', 'burgundowy'),
(62, 'kolor', 'burgundowo-biało-czarny'),
(64, 'kolor', 'jasny'),
(65, 'kolor', 'czarny'),
(66, 'kolor', 'biały');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `platnosc`
--

CREATE TABLE `platnosc` (
  `Id_platnosci` int(11) NOT NULL,
  `typ_platnosci` varchar(50) DEFAULT NULL,
  `firma` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `platnosc`
--

INSERT INTO `platnosc` (`Id_platnosci`, `typ_platnosci`, `firma`) VALUES
(1, 'Karta kredytowa', 'ABC Company'),
(2, 'Gotówka', 'XYZ Corporation'),
(3, 'Przelew bankowy', '123 Industries');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `produkty`
--

CREATE TABLE `produkty` (
  `Id_produktu` int(11) NOT NULL,
  `nazwa_produktu` varchar(255) NOT NULL,
  `id_parametru` int(11) NOT NULL,
  `cena` float NOT NULL,
  `stan_magazynowy` int(11) NOT NULL,
  `opis_produktu` varchar(255) NOT NULL,
  `URL` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produkty`
--

INSERT INTO `produkty` (`Id_produktu`, `nazwa_produktu`, `id_parametru`, `cena`, `stan_magazynowy`, `opis_produktu`, `URL`) VALUES
(1, 'Buty sportowe Nike Air Max', 28, 129.99, 85, 'Wygodne buty sportowe Nike Air Max w kolorze czarnym.', 'https://vetemsi.pl/images/kg104/22000-23000/Buty-NIKE-Air-Ma-Plus-Biale_%5B22402%5D_480.jpg'),
(2, 'Buty do koszykówki Adidas Harden Vol. 5', 49, 159.99, 39, 'Model Air Max Plus 3 czerpie to, co najlepsze od minionych pokoleń. ', 'https://i1.t4s.cz/products/h69009/adidas-harden-vol-5-futurenatural-377186-h69009.jpeg'),
(3, 'Nike Air Max Plus', 38, 899.99, 590, 'Wyrusz na ulice w wyrazistym stylu w butach Nike Air Max Plus.', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f3e87950-b5e1-4919-af9c-e60ac9c55027/buty-air-max-plus-WK2hPt.png'),
(4, 'Nike Air Max Plus Utility', 34, 929.99, 15, 'Buty Nike Air Max Plus Utility, inspirowane plażą i stworzone z myślą o mieście, to trwały model idealny na miejskie przygody. ', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7b9c0a95-c335-47d0-a6fe-b9cecbdea309/buty-meskie-air-max-plus-utility-kZZ2vm.png'),
(5, 'Nike Air Max Plus', 39, 499.99, 8, 'Faliste linie i kultowe plastikowe akcenty zapewniają niepokorny styl.', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8c42265-2017-478e-852d-1ee4d26dbf8b/buty-dla-malych-air-max-plus-1L9mkB.png'),
(40, 'ADIFOM SLTN SHOES', 0, 349.3, 297, 'Bardzo ładne buty, nadające się do wszystkiego.', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f6a094fd4cb471ab606aecb01175c21_9366/Adifom_SLTN_Shoes_Bialy_HP6481_01_standard.jpg'),
(41, 'BUTY ADIFOM CLIMACOOL', 0, 550, 22, 'ODDYCHAJĄCE BUTY WYKONANE CZĘŚCIOWO Z MATERIAŁÓW POCHODZĄCYCH Z RECYKLINGU.', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/33c90c1d074347f59f91300ddee4e847_9366/Buty_Adifom_Climacool_Bialy_IF3901.jpg'),
(42, 'ADIFOM SLTN SHOES', 0, 270, 107, 'Gdy wygoda jest dla Ciebie najważniejsza, wybierz te buty adidas.', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0b33174719004aca8715aec400f588cf_9366/Adifom_SLTN_Shoes_Szary_HP6478_04_standard.jpg');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `produkty_kategorie`
--

CREATE TABLE `produkty_kategorie` (
  `id_produkt_kategoria` int(11) NOT NULL,
  `Id_produktu` int(11) DEFAULT NULL,
  `id_kategorii` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produkty_kategorie`
--

INSERT INTO `produkty_kategorie` (`id_produkt_kategoria`, `Id_produktu`, `id_kategorii`) VALUES
(130, 4, 74),
(131, 4, 62),
(132, 4, 63),
(133, 5, 67),
(134, 5, 62),
(135, 5, 61),
(136, 5, 68),
(137, 5, 74),
(142, 1, 60),
(143, 1, 61),
(147, 3, 60),
(149, 2, 61),
(150, 2, 62),
(151, 40, 60),
(152, 40, 63),
(153, 40, 64),
(154, 40, 61),
(155, 40, 62),
(156, 40, 66),
(157, 40, 74),
(158, 41, 60),
(159, 41, 61),
(160, 42, 60),
(161, 42, 61),
(162, 42, 66);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `produkty_parametry`
--

CREATE TABLE `produkty_parametry` (
  `Id_produkt_parametr` int(11) NOT NULL,
  `Id_produktu` int(11) NOT NULL,
  `Id_parametru` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produkty_parametry`
--

INSERT INTO `produkty_parametry` (`Id_produkt_parametr`, `Id_produktu`, `Id_parametru`) VALUES
(6, 36, 51),
(7, 36, 52),
(17, 38, 50),
(18, 38, 51),
(19, 39, 52),
(20, 39, 64),
(21, 39, 51),
(22, 39, 62),
(42, 4, 57),
(43, 4, 55),
(44, 4, 60),
(45, 4, 64),
(46, 4, 54),
(47, 4, 56),
(48, 5, 55),
(49, 5, 56),
(50, 5, 58),
(51, 5, 59),
(52, 5, 62),
(53, 5, 60),
(54, 5, 57),
(59, 1, 56),
(60, 1, 57),
(61, 1, 58),
(62, 1, 59),
(63, 1, 65),
(84, 3, 54),
(85, 3, 55),
(86, 3, 56),
(87, 3, 58),
(88, 3, 57),
(89, 3, 64),
(90, 3, 59),
(98, 2, 60),
(99, 2, 55),
(100, 2, 58),
(101, 2, 59),
(102, 2, 66),
(103, 40, 51),
(104, 40, 55),
(105, 40, 56),
(106, 40, 52),
(107, 40, 57),
(108, 40, 64),
(109, 40, 58),
(110, 40, 66),
(111, 41, 52),
(112, 41, 53),
(113, 41, 55),
(114, 41, 57),
(115, 41, 66),
(116, 41, 56),
(117, 41, 58),
(118, 42, 53),
(119, 42, 56),
(120, 42, 57),
(121, 42, 58);

-- --------------------------------------------------------

--
-- Zastąpiona struktura widoku `przychody`
-- (See below for the actual view)
--
CREATE TABLE `przychody` (
`Id_zamowienia` int(11)
,`data_zamowienia` date
,`cena_zamowienia` double(19,2)
);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `strony`
--

CREATE TABLE `strony` (
  `id_strony` int(11) NOT NULL,
  `tytul` varchar(255) DEFAULT NULL,
  `opis` text DEFAULT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `strony`
--

INSERT INTO `strony` (`id_strony`, `tytul`, `opis`, `status`) VALUES
(1, 'Regulamin Serwisu/Usługi', '<p id=\"isPasted\">Niniejszy regulamin określa zasady korzystania z serwisu/usługi [nazwa serwisu/usługi], dostępnego pod adresem [adres URL].</p><p><br></p><p>Korzystanie z serwisu/usługi oznacza akceptację i zobowiązanie się do przestrzegania niniejszego regulaminu.</p><p><br></p><p>Administrator serwisu/usługi zastrzega sobie prawo do zmiany regulaminu w dowolnym momencie. Użytkownicy zostaną powiadomieni o zmianach na stronie gł&oacute;wnej serwisu/usługi oraz na podanym adresie e-mail.</p>', 'widoczny'),
(4, 'O Nas', '<p id=\"isPasted\">Witaj w [Nazwa Twojego Sklepu Internetowego]!</p><p><br></p><p>Jesteśmy dumni, że możemy Cię gościć w naszym wirtualnym sklepie. Nasza pasja do [rodzaj produkt&oacute;w, kt&oacute;rymi się zajmujemy] oraz długoletnie doświadczenie w branży sprawiają, że jesteśmy gotowi dostarczyć Ci najlepsze produkty i obsługę, kt&oacute;re zasługujesz.</p>', 'widoczny'),
(5, 'Nasz Zespół', '<p>[Nazwa Twojego Sklepu Internetowego] to miejsce stworzone przez ludzi, kt&oacute;rzy kochają [rodzaj produkt&oacute;w]. Nasz zesp&oacute;ł to pasjonaci, kt&oacute;rzy wkładają serce w to, co robią. Jesteśmy dumni z naszej wiedzy i doświadczenia w dziedzinie [rodzaj produkt&oacute;w], kt&oacute;re chcemy przekazać naszym klientom.</p>', 'widoczny'),
(8, 'Nasza oferta', '<p style=\"margin-left: 20px; text-align: justify;\" id=\"isPasted\">W naszym sklepie znajdziesz szeroki wyb&oacute;r [rodzaj produkt&oacute;w], kt&oacute;re są starannie wyselekcjonowane przez nasz zesp&oacute;ł, by zapewnić Ci dostęp do produkt&oacute;w o najwyższej jakości. Staramy się nieustannie poszerzać naszą ofertę, aby zaspokoić r&oacute;żnorodne potrzeby naszych klient&oacute;w.</p>', 'widoczny');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ulubione_produkty`
--

CREATE TABLE `ulubione_produkty` (
  `Id_ulubiony_produkt` int(11) NOT NULL,
  `Id_produktu` int(11) DEFAULT NULL,
  `ID_USER` int(11) DEFAULT NULL,
  `nazwa_produktu` varchar(255) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ulubione_produkty`
--

INSERT INTO `ulubione_produkty` (`Id_ulubiony_produkt`, `Id_produktu`, `ID_USER`, `nazwa_produktu`, `URL`) VALUES
(15, 40, 64, 'ADIFOM SLTN SHOES', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f6a094fd4cb471ab606aecb01175c21_9366/Adifom_SLTN_Shoes_Bialy_HP6481_01_standard.jpg'),
(19, 3, 63, 'Nike Air Max Plus', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f3e87950-b5e1-4919-af9c-e60ac9c55027/buty-air-max-plus-WK2hPt.png'),
(20, 42, 63, 'ADIFOM SLTN SHOES', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0b33174719004aca8715aec400f588cf_9366/Adifom_SLTN_Shoes_Szary_HP6478_04_standard.jpg'),
(24, 41, 63, 'BUTY ADIFOM CLIMACOOL', 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/33c90c1d074347f59f91300ddee4e847_9366/Buty_Adifom_Climacool_Bialy_IF3901.jpg');

--
-- Wyzwalacze `ulubione_produkty`
--
DELIMITER $$
CREATE TRIGGER `trg_before_insert_ulubione_produkty` BEFORE INSERT ON `ulubione_produkty` FOR EACH ROW BEGIN
    SET NEW.nazwa_produktu = (SELECT nazwa_produktu FROM produkty WHERE Id_produktu = NEW.Id_produktu);
    SET NEW.URL = (SELECT URL FROM produkty WHERE Id_produktu = NEW.Id_produktu);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `ID_USER` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `imie` varchar(255) NOT NULL,
  `nazwisko` varchar(255) NOT NULL,
  `adres` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `haslo` varchar(255) NOT NULL,
  `typ` varchar(255) NOT NULL DEFAULT 'user',
  `notatka` text NOT NULL,
  `reset_token_hash` varchar(64) DEFAULT NULL,
  `reset_token_expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID_USER`, `username`, `imie`, `nazwisko`, `adres`, `email`, `haslo`, `typ`, `notatka`, `reset_token_hash`, `reset_token_expires_at`) VALUES
(1, 'podlaskialgorytm', 'Michał', 'Kozak', 'Stary Bartków, 77', 'live.m851@gmail.com', '1e0959e42c8f0920b3fc6e0a7fee7518', 'admin', 'JESTEM SZEFEM', '86163bde77feb222bf0e0b2c77d780ed9a5c72d9c51bf987f35a54f490012ec9', '2023-10-10 22:58:21'),
(57, 'MichalLive', 'Michał', 'Kozak', 'Stary Bartków, 77', 'u19_michalkozak@zsp1.siedlce.pl', '82093d64cacf7c63ef1acb2fecedf7d5', 'admin', '', NULL, NULL),
(58, 'Lulek12321', 'Michał', 'Kozak', 'Żabokliki 12', 'duch-04@wp.pl', 'd5981fdcc789247f1774725f8be6db02', 'user', '', NULL, NULL),
(59, 'Cobraa', 'Jan', 'Szczygieł', 'Stary Bartków, 77', 'pawel.k1975@wp.pl', 'd5981fdcc789247f1774725f8be6db02', 'user', '', NULL, NULL),
(60, 'ziomuś', 'Jan', 'Kowal', 'Siedlce 8', 'polak@wp.pl', 'a0f1dfc51a0c878bd4614f040538289a', 'admin', '', NULL, NULL),
(61, 'live.m851@gmail.com', 'asda', 'adada', 'adsad', 'wp@wp.pl', '1e0959e42c8f0920b3fc6e0a7fee7518', 'worker', '', NULL, NULL),
(62, 'PracownikFirmyM&D', 'Jarek', 'Kowalski', 'Warszawa 77', 'pracownik@wp.pl', 'f25501bf6816c40f7e9e81daf1130d4a', 'worker', '', NULL, NULL),
(63, 'Typowy Użytkownik', 'Polinejkes', 'Szczęsny', 'Warszawa Nowy Świat 11', 'user@wp.pl', '17e6ca2b37738545ec295c2bd8801a41', 'user', '', NULL, NULL),
(64, 'Kupujący', 'Jakub', 'Koryski', 'Siedlce ul. Jana Pawła II 2', 'j.korsyski@kup.pl', 'f25501bf6816c40f7e9e81daf1130d4a', 'user', '', NULL, NULL);

--
-- Wyzwalacze `user`
--
DELIMITER $$
CREATE TRIGGER `after_user_insert` AFTER INSERT ON `user` FOR EACH ROW BEGIN
    INSERT INTO dane_do_wysylki (ID_USER, imie_nazwisko, email, adres)
    VALUES (NEW.ID_USER, CONCAT(NEW.imie, ' ', NEW.nazwisko), NEW.email, NEW.adres);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamowienia`
--

CREATE TABLE `zamowienia` (
  `Id_zamowienia` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `data_zamowienia` date DEFAULT NULL,
  `status` varchar(50) DEFAULT 'W trakcie przygotowywania',
  `Id_dostawcy` int(11) DEFAULT NULL,
  `ID_USER` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zamowienia`
--

INSERT INTO `zamowienia` (`Id_zamowienia`, `email`, `data_zamowienia`, `status`, `Id_dostawcy`, `ID_USER`) VALUES
(10, 'live.851@gmail.com', '2023-11-11', 'Wysłana', 4, NULL),
(13385, 'user@wp.pl', '2023-11-18', 'W trakcie przygotowywania', 3, 63),
(37872, 'userka@wp.pl', '2023-11-18', 'W trakcie przygotowywania', 3, 63),
(54703, 'user@wp.pl', '2023-11-18', 'W trakcie przygotowywania', 5, 63),
(127493, 'user@wp.pl', '2023-11-15', 'W trakcie przygotowywania', 4, 63),
(219564, 'user2@wp.pl', '2023-11-18', 'W trakcie przygotowywania', 4, 63),
(261712, 'live.m851@gmail.com', '2023-11-13', 'W trakcie przygotowywania', 5, NULL),
(280304, 'live.m851@gmail.com', '2023-11-11', 'W trakcie przygotowywania', 3, NULL),
(338773, 'p.rak@wp.pl', '2023-11-14', 'W trakcie przygotowywania', 2, NULL),
(341011, 'live.m851@gmail.com', '2023-11-11', 'W trakcie przygotowywania', 1, NULL),
(348460, 'user@wp.pl', '2023-11-24', 'W trakcie przygotowywania', 2, 63),
(421262, 'a.rado@wp.pl', '2023-11-14', 'W trakcie przygotowywania', 3, NULL),
(471187, 'user@wp.pl', '2023-11-18', 'W trakcie przygotowywania', 1, 63),
(548757, 'j.korsyski@kup.pl', '2023-11-19', 'W trakcie przygotowywania', 5, 64),
(550829, 'j.opol@wp.pl', '2023-11-14', 'W trakcie przygotowywania', 1, NULL),
(687250, 'TEST@Wp.pl', '2023-11-11', 'W trakcie przygotowywania', 2, NULL),
(757299, 'user@wp.pl', '2023-11-16', 'W trakcie przygotowywania', 5, 63),
(830207, 'live.m851@gmail.com', '2023-11-11', 'W trakcie przygotowywania', 1, NULL),
(843511, 'og@wp.pl', '2023-11-14', 'W trakcie przygotowywania', 1, NULL),
(896686, 'i.nazarski@gmail.com', '2023-11-14', 'W trakcie przygotowywania', 5, NULL),
(903386, 'user@wp.pl', '2023-11-18', 'W trakcie przygotowywania', 2, 63),
(984361, 'user@wp.pl', '2023-11-20', 'W trakcie przygotowywania', 3, 63);

--
-- Wyzwalacze `zamowienia`
--
DELIMITER $$
CREATE TRIGGER `before_insert_zamowienia` BEFORE INSERT ON `zamowienia` FOR EACH ROW SET NEW.data_zamowienia = CURDATE()
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamowienia_produkty`
--

CREATE TABLE `zamowienia_produkty` (
  `id_zamowienie_produkt` int(11) NOT NULL,
  `Id_zamowienia` int(11) DEFAULT NULL,
  `Id_produktu` int(11) DEFAULT NULL,
  `ilość` int(11) DEFAULT NULL,
  `Id_koloru` int(11) NOT NULL,
  `Id_rozmiaru` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zamowienia_produkty`
--

INSERT INTO `zamowienia_produkty` (`id_zamowienie_produkt`, `Id_zamowienia`, `Id_produktu`, `ilość`, `Id_koloru`, `Id_rozmiaru`) VALUES
(45, 10, 40, 1, 50, 55),
(47, 280304, 3, 1, 64, 59),
(48, 687250, 1, 1, 65, 59),
(49, 687250, 1, 1, 65, 58),
(50, 830207, 1, 1, 65, 59),
(51, 830207, 2, 1, 66, 59),
(52, 830207, 41, 1, 66, 58),
(53, 830207, 5, 1, 60, 57),
(54, 830207, 4, 1, 54, 56),
(55, 341011, 5, 1, 60, 57),
(56, 341011, 40, 1, 66, 58),
(57, 261712, 42, 1, 53, 58),
(58, 261712, 2, 1, 66, 59),
(59, 261712, 1, 1, 65, 59),
(60, 843511, 1, 1, 65, 59),
(61, 896686, 1, 1, 65, 59),
(62, 550829, 41, 1, 53, 58),
(63, 550829, 3, 1, 64, 59),
(64, 550829, 5, 1, 60, 57),
(65, 421262, 2, 1, 66, 59),
(66, 421262, 42, 1, 53, 58),
(67, 338773, 2, 1, 66, 59),
(68, 127493, 2, 1, 66, 59),
(69, 757299, 2, 2, 66, 59),
(70, 757299, 42, 1, 53, 58),
(71, 471187, 2, 1, 60, 59),
(72, 219564, 41, 1, 66, 58),
(83, 903386, 2, 1, 66, 59),
(86, 13385, 4, 1, 54, 56),
(87, 54703, 3, 1, 64, 59),
(88, 37872, 4, 1, 54, 56),
(89, 548757, 42, 1, 53, 58),
(90, 984361, 41, 5, 66, 58),
(91, 348460, 1, 2, 65, 59);

-- --------------------------------------------------------

--
-- Struktura widoku `przychody`
--
DROP TABLE IF EXISTS `przychody`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `przychody`  AS SELECT `z`.`Id_zamowienia` AS `Id_zamowienia`, `z`.`data_zamowienia` AS `data_zamowienia`, round(sum(`p`.`cena` * `zp`.`ilość`),2) AS `cena_zamowienia` FROM ((`zamowienia` `z` join `zamowienia_produkty` `zp`) join `produkty` `p`) WHERE `z`.`Id_zamowienia` = `zp`.`Id_zamowienia` AND `zp`.`Id_produktu` = `p`.`Id_produktu` GROUP BY `z`.`Id_zamowienia`, `z`.`data_zamowienia` ;

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `dane_do_wysylki`
--
ALTER TABLE `dane_do_wysylki`
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Indeksy dla tabeli `dostawcy`
--
ALTER TABLE `dostawcy`
  ADD PRIMARY KEY (`Id_dostawcy`);

--
-- Indeksy dla tabeli `kategorie`
--
ALTER TABLE `kategorie`
  ADD PRIMARY KEY (`id_kategorii`);

--
-- Indeksy dla tabeli `parametry`
--
ALTER TABLE `parametry`
  ADD PRIMARY KEY (`id_parametru`);

--
-- Indeksy dla tabeli `platnosc`
--
ALTER TABLE `platnosc`
  ADD PRIMARY KEY (`Id_platnosci`);

--
-- Indeksy dla tabeli `produkty`
--
ALTER TABLE `produkty`
  ADD PRIMARY KEY (`Id_produktu`);

--
-- Indeksy dla tabeli `produkty_kategorie`
--
ALTER TABLE `produkty_kategorie`
  ADD PRIMARY KEY (`id_produkt_kategoria`),
  ADD KEY `id_kategorii` (`id_kategorii`),
  ADD KEY `fk_produkty` (`Id_produktu`);

--
-- Indeksy dla tabeli `produkty_parametry`
--
ALTER TABLE `produkty_parametry`
  ADD PRIMARY KEY (`Id_produkt_parametr`),
  ADD KEY `fkey` (`Id_produktu`),
  ADD KEY `fkey2` (`Id_parametru`);

--
-- Indeksy dla tabeli `strony`
--
ALTER TABLE `strony`
  ADD PRIMARY KEY (`id_strony`);

--
-- Indeksy dla tabeli `ulubione_produkty`
--
ALTER TABLE `ulubione_produkty`
  ADD PRIMARY KEY (`Id_ulubiony_produkt`),
  ADD KEY `Id_produktu` (`Id_produktu`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID_USER`);

--
-- Indeksy dla tabeli `zamowienia`
--
ALTER TABLE `zamowienia`
  ADD PRIMARY KEY (`Id_zamowienia`),
  ADD KEY `Id_dostawcy` (`Id_dostawcy`),
  ADD KEY `FK_zamowienia_uzytkownicy` (`ID_USER`);

--
-- Indeksy dla tabeli `zamowienia_produkty`
--
ALTER TABLE `zamowienia_produkty`
  ADD PRIMARY KEY (`id_zamowienie_produkt`),
  ADD KEY `Id_zamowienia` (`Id_zamowienia`),
  ADD KEY `Id_produktu` (`Id_produktu`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dostawcy`
--
ALTER TABLE `dostawcy`
  MODIFY `Id_dostawcy` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `kategorie`
--
ALTER TABLE `kategorie`
  MODIFY `id_kategorii` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `parametry`
--
ALTER TABLE `parametry`
  MODIFY `id_parametru` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `produkty`
--
ALTER TABLE `produkty`
  MODIFY `Id_produktu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `produkty_kategorie`
--
ALTER TABLE `produkty_kategorie`
  MODIFY `id_produkt_kategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=163;

--
-- AUTO_INCREMENT for table `produkty_parametry`
--
ALTER TABLE `produkty_parametry`
  MODIFY `Id_produkt_parametr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `strony`
--
ALTER TABLE `strony`
  MODIFY `id_strony` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `ulubione_produkty`
--
ALTER TABLE `ulubione_produkty`
  MODIFY `Id_ulubiony_produkt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `zamowienia`
--
ALTER TABLE `zamowienia`
  MODIFY `Id_zamowienia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=984362;

--
-- AUTO_INCREMENT for table `zamowienia_produkty`
--
ALTER TABLE `zamowienia_produkty`
  MODIFY `id_zamowienie_produkt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dane_do_wysylki`
--
ALTER TABLE `dane_do_wysylki`
  ADD CONSTRAINT `dane_do_wysylki_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID_USER`);

--
-- Constraints for table `produkty_kategorie`
--
ALTER TABLE `produkty_kategorie`
  ADD CONSTRAINT `fk_produkty` FOREIGN KEY (`Id_produktu`) REFERENCES `produkty` (`Id_produktu`) ON DELETE CASCADE,
  ADD CONSTRAINT `produkty_kategorie_ibfk_1` FOREIGN KEY (`Id_produktu`) REFERENCES `produkty` (`Id_produktu`),
  ADD CONSTRAINT `produkty_kategorie_ibfk_2` FOREIGN KEY (`id_kategorii`) REFERENCES `kategorie` (`id_kategorii`);

--
-- Constraints for table `ulubione_produkty`
--
ALTER TABLE `ulubione_produkty`
  ADD CONSTRAINT `ulubione_produkty_ibfk_1` FOREIGN KEY (`Id_produktu`) REFERENCES `produkty` (`Id_produktu`),
  ADD CONSTRAINT `ulubione_produkty_ibfk_2` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID_USER`);

--
-- Constraints for table `zamowienia`
--
ALTER TABLE `zamowienia`
  ADD CONSTRAINT `FK_zamowienia_uzytkownicy` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID_USER`),
  ADD CONSTRAINT `zamowienia_ibfk_1` FOREIGN KEY (`Id_dostawcy`) REFERENCES `dostawcy` (`Id_dostawcy`);

--
-- Constraints for table `zamowienia_produkty`
--
ALTER TABLE `zamowienia_produkty`
  ADD CONSTRAINT `zamowienia_produkty_ibfk_1` FOREIGN KEY (`Id_zamowienia`) REFERENCES `zamowienia` (`Id_zamowienia`),
  ADD CONSTRAINT `zamowienia_produkty_ibfk_2` FOREIGN KEY (`Id_produktu`) REFERENCES `produkty` (`Id_produktu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
