#!/bin/bash
# Patches all nested schema-utils@3.x copies to export `validate` as a callable default.
# Required because react-scripts@5 ecosystem was built against schema-utils@2.x which
# exported the validate function directly (module.exports = validate), but npm overrides
# force @3.x which exports a plain object. This patch makes both call patterns work.

PATCH='\/\/ Patched: callable default\nvalidate.validate = validate;\nvalidate.ValidationError = ValidationError;\nvalidate.enableValidation = enableValidation;\nvalidate.disableValidation = disableValidation;\nvalidate.needValidate = needValidate;\nmodule.exports = validate;\nconst _unused = {'

find node_modules -name "index.js" -path "*/schema-utils/dist/*" | while read -r f; do
  if grep -q 'module.exports = {' "$f"; then
    sed -i '' "s/module.exports = {/$PATCH/" "$f"
    echo "  Patched schema-utils: $f"
  fi
done

echo "Done patching schema-utils."
