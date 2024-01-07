# Politique de sécurité

## Cartographie

* Machine(s) professionnelle(s) durcies et services ProtonMail
* Sauvegarde cloud : ProtonDrive (Suisse)
* Sauvegarde hors ligne : support physique chiffré (France)


## Synthèse des risques


### Événements redoutés

| Id | Désignation |
|--|--|
| ER1 |	Perte des données |
| ER2 |	Vol des données |
 

### Scénarios de risque et mesures de sécurité


| Id | Scénario de risque | Mesures de sécurité prises |
|--|--|--|
| ER1-1 | Perte du PC |	Backup hors ligne et réplication cloud |
| ER1-2 | Perte du PC + backup | Réplication cloud |
| ER1-2 | Perte PC + accès cloud | Backup hors ligne |
| ER2-1 | Vol PC | Chiffrement des données + Hardening système |
| ER2-2 | Vol Backup hors ligne | Chiffrement des données |
| ER2-2 | Compromission service cloud | Authentification multifacteurs + Chiffrement des données au transit et au repos |


### Scénarios hors périmètre de cette analyse

Si ces scénarios doivent être considérés, une autre infrastructure et PSSI seront définies

* Perte simultanée du PC + Backup + cloud
* Guerres et catastrophe naturelles
* Actions d'agences étatiques, "state sponsored" et assimilées, lorsque les moyens mis en oeuvre sont démesurés


##	RGPD et confidentialité

### Traitement de données personnelles 


| Id | Traitement | Type de données | Accès |
|--|--|--|--|
| TR-1 | Devis et Factures | noms, adresses | Non partagé |
| TR-2 | Exécution des prestations | noms, téléphones, mails | Non partagé |


### Utilisation des services Proton 

Dans une démarche éthique et garante de la confidentialité des données, les services Proton (Cloud et Messagerie) sont privilégiés.
Proton stocke les données, mais n'y a pas accès.

* [Privacy](https://proton.me/fr/legal/privacy)
* [GDPR compliance and email security | Proton](https://proton.me/fr/blog/gdpr-email-compliance)
* [Accord de traitement des données Proton | Proton](https://proton.me/fr/legal/dpa)


### Utilisation de produits Microsoft

Les services Microsoft, tels que Windows, MS Office, Github et ChatGPT permettent d'être compatible avec les attentes et les technologies des clients.

Malgré l’invalidation du Privacy Shield, les clauses contractuelles types entre Microsoft et l’Union européenne fournissent des garanties spécifiques concernant les transferts de données personnelles pour les services dans le cadre de l’étendue. Les clauses contractuelles types de l’Union européenne sont utilisées entre les fournisseurs de services (tels que Microsoft) et leurs clients pour s’assurer que toutes les données personnelles sortant de l’EEE seront transférées conformément au RGPD. 
	
* [Clauses contractuelles types de l’Union européenne](https://learn.microsoft.com/fr-fr/compliance/regulatory/offering-EU-Model-Clauses?view=o365-worldwide#microsoft-in-scope-cloud-platforms--services)
* [Standard Contractual Clauses (SCC) (europa.eu)](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en)


### Traitement des autres données sensibles

* Du fait de leur sensibilité, les rapports de tests d’intrusion sont supprimés après le paiement de la prestation.
* Sauf demande de suppression du client, les autres livrables peuvent être conservés pour garantir le suivi des prestations et le service après-vente.

### Nomadisme

* Les connexions chiffrées de bout en bout sont privilégiées dans la mesure du possible. 
* Des services VPN sont utilisés lorsque nécessaire.
