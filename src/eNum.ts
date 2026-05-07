// enum

// set of fixed string literal ek jaigai rakhe

// type UserRole = "Admin" | "Editor" | "Viewer";
// যখন বড় প্রজেক্ট করব তখন আমাদের এই Admin লেখাটাই ভুল আসতেই পারে সেক্ষেত্রে debug করাটা কষ্ট হয়ে যায় সেহেতু আমরা enum ইউএস করব

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const editRole = (userRole: UserRoles) => {
  if (userRole === UserRoles.Admin || userRole === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};

const editRolePermissible = editRole(UserRoles.Admin);

console.log(editRolePermissible);
