<?php

    include('./ConnexionClass.php');

    class ContactClass{
        public function requete(){
            $req = $this->connexion()->preapre("Insert into contact (id_contact,nom_contact,mail_contact,sujet_contact,message_contact) values('','','','','')");
        }
    }
?>