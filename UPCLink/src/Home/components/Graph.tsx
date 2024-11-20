import { ReactElement } from "react";
import { ForceGraph2D} from 'react-force-graph';
import { useEffect , useRef, useState} from "react";
import { graphData } from "./graph_data";


export const GrapComponent = (): ReactElement => {

    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 }); 

    useEffect(() => {
      const handleResize = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
          });
        }
      };
  
      handleResize(); // Set initial dimensions
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const fgRef = useRef();


    return(
        <div ref={containerRef} style={{ width: '100%'}} className="bg-white">
          <ForceGraph2D
          
            graphData={graphData}    
            cooldownTicks={100}
            width={dimensions.width}
            height={dimensions.height}
            nodeAutoColorBy={"val"}
            nodeRelSize={6}
            nodeCanvasObject={(node, ctx, globalScale) => {
              ctx.beginPath();
              ctx.arc(node.x, node.y,Math.ceil( Math.sqrt(node.val)), 0, 2 * Math.PI, false);
              ctx.fillStyle = node.color || 'blue'; // Node color
              ctx.fill();
            }}
            />

      </div>
    )
}