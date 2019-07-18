<?php
    class ConnexionClass{

        function connexion(){

            try {
                $user = "albi";
                $mdp = "58626682";

                $dbh = new PDO('mysql:host=localhost;dbname=test',"albi","58626682");
            } catch (PDOException $e) {
                print "Erreur !:".$e->getMessage();
                die();
            }
        }
    }
?>