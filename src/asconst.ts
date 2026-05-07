// as const assertion

// enum UserRoles {
//   Admin = "Admin",
//   Editor = "Editor",
//   Viewer = "Viewer",
// }

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

/**
 * as const use korar fole key er samne readonly modifier cole ashe

 * readonly Admin: "Admin",
 * readonly Editor: "Editor",
 * readonly Viewer: "Viewer",

 * jar fole amra object ke ar edit korte parbo na
 */

const editRole = (userRole: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (userRole === UserRoles.Admin || userRole === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const editRolePermissible = editRole(UserRoles.Admin);

console.log(editRolePermissible);
