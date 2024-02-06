export default function handleFirebaseError(error) {
  console.error('Error:', error);
  switch (error.code) {
    case 'auth/invalid-email':
      return "L'adresse e-mail est mal formatée";
    case 'auth/user-disabled':
      return 'Ce compte a été désactivé';
    case 'auth/user-not-found':
      return "Il n'y a pas d'utilisateur correspondant à cet identifiant. L'utilisateur a peut-être été supprimé";
    case 'auth/wrong-password':
      return "Le mot de passe est invalide pour l'e-mail donné, ou le compte correspondant à l'e-mail ne possède pas de mot de passe";
    case 'auth/email-already-in-use':
      return "L'adresse e-mail est déjà utilisée par un autre compte";
    case 'auth/operation-not-allowed':
      return "La création de comptes avec e-mail et mot de passe n'est pas activée";
    case 'auth/weak-password':
      return 'Le mot de passe est trop faible';
    default:
      return 'Erreur. Veuillez réessayer ou créer votre compte';
  }
}
