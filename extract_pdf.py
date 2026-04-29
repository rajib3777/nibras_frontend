from pypdf import PdfReader

reader = PdfReader("c:/Users/Admin/Downloads/Foundation.pdf")
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n\n"

with open("c:/Users/Admin/rajib/nibras-foundation/foundation_content.txt", "w", encoding="utf-8") as f:
    f.write(text)
