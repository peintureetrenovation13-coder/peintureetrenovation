with open('src/App.jsx', 'r') as f:
    c = f.read()

changes = [
    ('alt="logo" style={{height:48,objectFit:"contain"}}', 'alt="logo" style={{height:48,width:48,objectFit:"cover",borderRadius:"50%",flexShrink:0}}'),
    ('alt="logo" style={{height:60,objectFit:"contain"}}', 'alt="logo" style={{height:60,width:60,objectFit:"cover",borderRadius:"50%",flexShrink:0}}'),
    ('alt="logo" style={{height:50,objectFit:"contain"}}', 'alt="logo" style={{height:50,width:50,objectFit:"cover",borderRadius:"50%",flexShrink:0}}'),
    ('.mda-wrap{background:#fff;padding:5px 10px;', '.mda-wrap{background:transparent;padding:5px 4px;'),
    ('style={{height:44,objectFit:"contain"}}', 'style={{height:64,objectFit:"contain",mixBlendMode:"multiply"}}'),
    ('translateX(-100vw)', 'translateX(-48px) skewX(-2deg)'),
    ('translateX(100vw)', 'translateX(48px) skewX(2deg)'),
    ('translateY(60px)', 'translateY(32px)'),
    ('translateY(-60px)', 'translateY(-24px)'),
]

n = 0
for old, new in changes:
    if old in c:
        c = c.replace(old, new)
        n += 1

with open('src/App.jsx', 'w') as f:
    f.write(c)

print(f'{n}/9 changements appliqués')
