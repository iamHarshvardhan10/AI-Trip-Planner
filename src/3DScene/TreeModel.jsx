import { useGLTF } from "@react-three/drei";

const TreeModel = () => {
  const { scene } = useGLTF("./tree_house/scene.gltf");
  return (
    <group>
      <primitive object={scene} />
    </group>
  );
};

export default TreeModel;
