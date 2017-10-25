/*
 * Source: https://stackoverflow.com/questions/16343098/resize-a-picture-to-fit-a-jlabel
 */
package resizelabelicon;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
import javax.swing.JLabel;

/**
 *
 * @author Janderson Constantino
 */
public class Functions {

    //Function for set icon in JLabel with necessity resize
    public void setLabelIcon(String srcImage, JLabel label) {
        try {
            //Buffer       
            BufferedImage img = null;
            img = ImageIO.read(new File(srcImage));
            //Resize
            Image dimg = img.getScaledInstance(label.getWidth(), label.getHeight(),
                                               Image.SCALE_SMOOTH);
            //Create
            ImageIcon imageIcon = new ImageIcon(dimg);
            //Set label
            label.setIcon(imageIcon);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
