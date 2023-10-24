-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Paź 24, 2023 at 04:11 PM
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
(5, 'INPOST', 'ul. Inpostowa 11', 'express2@dpd.com', 1.00),
(6, 'GLS Polska', 'ul. Logistyczna 33', 'gls@gls.com', 8.00),
(7, 'DHL Express', 'ul. Ekspresowa 45', 'dhl@dhl.com', 12.50),
(8, 'InPost Expres111', 'ul. Paczkomatowa 15', 'inpost2@example.com', 9.00),
(9, 'DOSTAWY 24H', 'ul. Paczkomatowa 15', 'inpost2@example.com', 9.00);

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
  `nazwa_parametru` varchar(255) NOT NULL,
  `opis_parametru` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parametry`
--

INSERT INTO `parametry` (`id_parametru`, `nazwa_parametru`, `opis_parametru`) VALUES
(1, 'Wysokość', 'Wysokość produktu w centymetrach.'),
(2, 'Szerokość', 'Szerokość produktu w centymetrach.'),
(3, 'Długość', 'Długość produktu w centymetrach.'),
(4, 'Waga', 'Waga produktu w kilogramach.'),
(5, 'Kolor', 'Kolor produktu według standardowych oznaczeń.'),
(6, 'Materiał', 'Materiał, z którego wykonany jest produkt.'),
(7, 'Pojemność', 'Pojemność produktu w litrach.'),
(8, 'Prędkość', 'Maksymalna prędkość produktu w kilometrach na godzinę.'),
(9, 'Rozmiar', 'Rozmiar produktu, np. numer buta.');

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
(1, 'Buty sportowe Nike Air Max', 1, 129.99, 100, 'Wygodne buty sportowe Nike Air Max w kolorze czarnym.', 'http://www.example.com/nike-air-max.jpg'),
(2, 'Buty trekkingowe Salomon X Ultra', 2, 149.99, 50, 'Trwałe buty trekkingowe Salomon X Ultra zapewniające wygodę na długich wędrówkach.', 'http://www.example.com/salomon-x-ultra.jpg'),
(3, 'Buty do biegania New Balance Fresh Foam', 3, 99.99, 30, 'Buty do biegania New Balance Fresh Foam zapewniające amortyzację i wygodę.', 'http://www.example.com/new-balance-fresh-foam.jpg'),
(4, 'Eleganckie mokasyny Clarks', 4, 79.99, 20, 'Mokasyny Clarks w klasycznym stylu, idealne do eleganckich okazji.', 'http://www.example.com/clarks-mokasyny.jpg'),
(5, 'Buty do koszykówki Adidas Harden Vol. 5', 5, 159.99, 60, 'Profesjonalne buty do koszykówki Adidas Harden Vol. 5 zapewniające wsparcie i przyczepność.', 'http://www.example.com/adidas-harden-vol-5.jpg');

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
(39, 5, 61),
(40, 4, 62),
(41, 3, 60),
(44, 2, 67),
(45, 1, 65);

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
(59, 'Cobraa', 'Jan', 'Szczygieł', 'Stary Bartków, 77', 'pawel.k1975@wp.pl', 'd5981fdcc789247f1774725f8be6db02', 'user', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamowienia`
--

CREATE TABLE `zamowienia` (
  `Id_zamowienia` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `data_zamowienia` date DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `Id_dostawcy` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zamowienia`
--

INSERT INTO `zamowienia` (`Id_zamowienia`, `email`, `data_zamowienia`, `status`, `Id_dostawcy`) VALUES
(1, 'live.m851@gmail.com', '2023-10-03', 'Dostarczona', 5),
(6, 'u19_michalkozak@zsp1.siedlce.pl', '2016-10-12', 'Wysłana', 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `zamowienia_produkty`
--

CREATE TABLE `zamowienia_produkty` (
  `id_zamowienie_produkt` int(11) NOT NULL,
  `Id_zamowienia` int(11) DEFAULT NULL,
  `Id_produktu` int(11) DEFAULT NULL,
  `ilość` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `zamowienia_produkty`
--

INSERT INTO `zamowienia_produkty` (`id_zamowienie_produkt`, `Id_zamowienia`, `Id_produktu`, `ilość`) VALUES
(5, 1, 1, 2),
(7, 1, 2, 3),
(8, 6, 5, 5),
(9, 6, 4, 1),
(10, 1, 3, 6);

--
-- Indeksy dla zrzutów tabel
--

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
-- Indeksy dla tabeli `strony`
--
ALTER TABLE `strony`
  ADD PRIMARY KEY (`id_strony`);

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
  ADD KEY `Id_dostawcy` (`Id_dostawcy`);

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
  MODIFY `id_parametru` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `produkty`
--
ALTER TABLE `produkty`
  MODIFY `Id_produktu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `produkty_kategorie`
--
ALTER TABLE `produkty_kategorie`
  MODIFY `id_produkt_kategoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `strony`
--
ALTER TABLE `strony`
  MODIFY `id_strony` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID_USER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `zamowienia`
--
ALTER TABLE `zamowienia`
  MODIFY `Id_zamowienia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `zamowienia_produkty`
--
ALTER TABLE `zamowienia_produkty`
  MODIFY `id_zamowienie_produkt` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `produkty_kategorie`
--
ALTER TABLE `produkty_kategorie`
  ADD CONSTRAINT `fk_produkty` FOREIGN KEY (`Id_produktu`) REFERENCES `produkty` (`Id_produktu`) ON DELETE CASCADE,
  ADD CONSTRAINT `produkty_kategorie_ibfk_1` FOREIGN KEY (`Id_produktu`) REFERENCES `produkty` (`Id_produktu`),
  ADD CONSTRAINT `produkty_kategorie_ibfk_2` FOREIGN KEY (`id_kategorii`) REFERENCES `kategorie` (`id_kategorii`);

--
-- Constraints for table `zamowienia`
--
ALTER TABLE `zamowienia`
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
