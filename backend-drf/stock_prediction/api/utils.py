import os
from django.conf import settings
from matplotlib import pyplot as plt
def save_plot(plot_image_path):
    image_path=os.path.join(settings.MEDIA_ROOT, plot_image_path)
    plt.savefig(image_path)
    plt.close()
    return os.path.join(settings.MEDIA_URL, plot_image_path)
  