
# CG 2023/2024 PROJECT

## Group T01G01
| Name             | Number    | E-Mail             |
| ---------------- | --------- | ------------------ |
| Cristiano Rocha  | 202108813 | up202108813@g.uporto.pt |
| António Ferreira | 202108834 | up202108834@up.pt       |



# Execution Instructions

To execute this project you should have the CGF libary and run with the `live server extension` on the `index.html` of the project.


## Project Description

This project was developed as part of the Computer Graphics course at FEUP. It involves the use of the CGF library to create an interactive scene with objects and a visually appealing environment using JavaScript.


# Implemented features

- The `Sphere` object was utilized to create the `Panorama`, which represents the landscape surrounding the scene.
- Various types of `Flowers` were parametrized to enhance modularity and provide a wider range of visual variety. Different textures are randomly selected to represent each flower.
- `Rocks and boulders` were incorporated to introduce diversity and complexity to the scene.
- The `Bee` character was modeled using an ellipsoid shape to achieve a more realistic appearance. It was then animated and given interactive controls to bring it to life.
- `Pollen` and `hives` were implemented based on the representation of flowers and the bee. This allows the bee to collect pollen from the flowers and deposit it into the hive.
- `Shaders` and `animation` techniques were employed to create a realistic representation of grass with wind effects.


## Bee Controls

The bee can be controlled using the keyboard to interact with the environment. The following controls are available:

- `W`: Increase the speed component of the bee's movement.
- `S`: Decrease the speed component of the bee's movement, allowing for backward movement.
- `A`: Turn the bee clockwise.
- `D`: Turn the bee counterclockwise.
- `R`: Reset the bee's position, sending it back to the origin.
- `F`: Initiate a descent of the bee towards the flowers.
- `P`: Pick up pollen from a flower if available, otherwise initiate an ascent to the starting height.
- `O`: Deposit the pollen that the bee has picked up into the hive.

### Note
- Due to the distribution of work among team members, we decided to complete the project before taking screenshots. This was done to ensure a more accurate representation of the final delivery. As a result, the commit tags may contain more code than expected, but the visible components in the scene will correspond to the final delivery.
