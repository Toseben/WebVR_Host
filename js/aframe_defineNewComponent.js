<script>
  AFRAME.aframeCore.registerComponent('line', {
  schema: {},
  
  update: function () {
    var material = new THREE.LineBasicMaterial({
	    color: this.data.color
    });

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
	    new THREE.Vector3( -3, 0, 0 ),
	    new THREE.Vector3( 3, 0, 0 )
    );

    var line = new THREE.Line( geometry, material );
    this.el.object3D.add(line);
  }  
});
</script>

<a-scene>
  <a-entity line="color: red"></a-entity>
</a-scene>