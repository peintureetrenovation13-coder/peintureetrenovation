c = open('src/App.jsx').read()
for kw in ['mda-wrap', 'sweepFromLeft', 'objectFit']:
    i = c.find(kw)
    if i >= 0:
        print(f"\n=== {kw} ===")
        print(repr(c[max(0,i-15):i+100]))
