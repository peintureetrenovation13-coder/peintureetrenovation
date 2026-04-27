import re, base64, os, sys

with open("src/App.jsx", "r") as f:
    content = f.read()

os.makedirs("public", exist_ok=True)
pattern = r'const (I_[A-Z0-9]+) = "data:image/(jpeg|png|gif|webp);base64,([A-Za-z0-9+/=\n]+?)";'
matches = list(re.finditer(pattern, content, re.DOTALL))
print(f"{len(matches)} image(s) trouvee(s)")

new_content = content
for m in matches:
    name, ext, data = m.group(1), m.group(2), m.group(3).replace("\n","")
    fname = name.lower().replace("i_","") + "." + ext
    with open(f"public/{fname}", "wb") as f:
        f.write(base64.b64decode(data))
    print(f"  {name} -> public/{fname} ({len(base64.b64decode(data))//1024} Ko)")
    new_content = new_content.replace(m.group(0), f'import {name} from "/{fname}";')

os.rename("src/App.jsx", "src/App.jsx.backup")
with open("src/App.jsx", "w") as f:
    f.write(new_content)
print(f"Avant: {len(content)//1024} Ko  Apres: {len(new_content)//1024} Ko")
print("Termine!")
