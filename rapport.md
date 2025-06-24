# Rapport d’anomalies

| Fichier                 | Type              | Description                                        | Correction prévue                |
|------------------------|-------------------|----------------------------------------------------|----------------------------------|
| userController.js       | Bug               | if (req.body.password = 'admin')                  | Remplacer `=` par `===`         |
| userController.js       | Code Smell        | Code dupliqué                                      | Extraire en fonction             |
| userController.js       | Sécurité          | SQL Injection possible                             | Utiliser requêtes préparées      |
| auth.js                | Sécurité          | Mots de passe en clair                            | Stocker hashés + en .env         |
| auth.js                | Sécurité          | XSS mal filtrée                                    | Utiliser une vraie lib de filtre |
