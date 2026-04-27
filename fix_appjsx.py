import re, base64, os

with open("src/App.jsx", "r") as f:
    content = f.read()

os.makedirs("public", exist_ok=True)

pattern = r'const (I_[A-Z0-9_]+) = "data:image/(jpeg|png|gif|webp);base64,([A-Za-z0-9+/=\n]+?)";'
matches = list(re.finditer(pattern, content, re.DOTALL))
print(f"{len(matches)} images trouvées")

for match in matches:
    name = match.group(1)
    ext = match.group(2)
    data = match.group(3).replace("\n", "")
    filename = name.lower().replace("i_", "") + "." + ext
    with open(f"public/{filename}", "wb") as f:
        f.write(base64.b64decode(data))
    old = match.group(0)
    new = f'import {name} from "/{filename}";'
    content = content.replace(old, new)
    print(f"✅ {name} → /{filename}")

with open("src/App.jsx", "w") as f:
    f.write(content)
print("✅ Terminé!")
