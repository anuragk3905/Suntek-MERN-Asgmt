// HANDS-ON 4
// ----------
// Test data:
const roles = {
  admin: ["create", "update", "delete", "view"],
  editor: ["update", "view"],
  viewer: ["view"]
};

// Operations:
//  1. Get all role names
const roleNames = Object.keys(roles);
console.log(roleNames);

//  2. Check if editor can delete
const canEditorDelete = roles.editor.includes("delete");
console.log(canEditorDelete);

//  3. Create a flat array of all unique permissions
const uniquePermissions = [...new Set(Object.values(roles).flat())];
console.log(uniquePermissions);

//  4. Add a new role moderator with permissions (immutably)
const updatedRoles = {...roles,moderator: ["update", "view"]};
console.log(updatedRoles);

//  5. Convert roles object into array of { role, permissionsCount }
const rolesWithCount = Object.entries(roles).map(([role, permissions]) => ({role,permissionsCount: permissions.length}));
console.log(rolesWithCount);