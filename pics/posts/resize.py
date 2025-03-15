from PIL import Image
import sys

def resize_image(input_path, output_path, scale):
    """Ridimensiona un'immagine al dato scale e la salva."""
    try:
        with Image.open(input_path) as img:
            new_size = (int(img.width * scale), int(img.height * scale))
            resized_img = img.resize(new_size, Image.LANCZOS)
            resized_img.save(output_path)
    except(IOError, ValueError) as e:
        print(f"ERR_ errore con file {input_path} -- {e}")


if __name__ == '__main__':
    filename = sys.argv[1]
    print("resizing",filename)
    resize_image(filename, f'{filename}_preview.png', 0.3)
