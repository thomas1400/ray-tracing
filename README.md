# ray-tracing

A 2D ray-tracing algorithm to simulate light cast on linear boundaries, implemented in JavaScript with p5.js. This algorithm casts rays from a 'source' of light, calculates the intersection points of the ray with each boundary, determines the closest boundary, then draws a ray from the source to the intersection point. By casting rays in 1 degree increments around the circumference of the source and drawing rays with some transparency, it is possible to simulate the sight of a light source casting light into a room with some degree of accuracy.

TO DO:
- Use 2D ray-tracing to render a simple 3D environment using a series of vertical bars.
- Adapt algorithm for 3D ray-tracing and rendering.
