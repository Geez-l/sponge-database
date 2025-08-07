import ResultDetailsClient from "./ResultDetailsClient";
import Footer from "../../components/footer";
import "../../css/resultDetails.css";

interface Sponge {
  oscule_shape: string;
  oscule_distribution: string;
  ostia: string;
  date_collected: string | null;
  depth: string;
  dive_no: string;
  researcher_name: string;
  sample_code: string;
  barcode_sequences: string;
  otu_id: number;
  color: string;
  functional_form: string;
  growth_form: string;
  surface_texture: string;
  putative_id: string;
  location_name: string;
  site_name: string;
}

interface ImageData {
  otu_id: number;
  otuImageUrl: string;
  sampleImageUrl: string;
}

async function getSpongeData(otu_id: string) {
  // const base = process.env.API_URL ?? "http://localhost:5000";
  const API_BASE_URL = "https://sponge-database-production.up.railway.app/api";

  try {
    // const spongeRes = await fetch(`${base}/api/samples/${otu_id}`, {
    //   cache: "no-store",
    // });
      const spongeRes = await fetch(`${API_BASE_URL}/samples/${otu_id}`, {
        cache: "no-store",
      });
    
    
    // const imageRes = await fetch(`${base}/api/images?otu_id=${otu_id}`, {
    //   cache: "no-store",
    // });
      const imageRes = await fetch(`${API_BASE_URL}/images?otu_id=${otu_id}`, {
        cache: "no-store",
      });

    if (!spongeRes.ok || !imageRes.ok) {
      throw new Error("Failed to fetch data");
    }

    const spongeData = await spongeRes.json();
    const imageData = await imageRes.json();

    return {
      sponge: spongeData.data,
      images: imageData.data || [],
    };
  } catch (error) {
    console.error("Error fetching sponge data:", error);
    return {
      sponge: null,
      images: [],
    };
  }
}

interface PageProps {
  params: Promise<{ otu_id: string }>;
}

export default async function Page({ params }: PageProps) {
  // Await the params object before accessing its properties
  const { otu_id } = await params;

  const { sponge, images } = await getSpongeData(otu_id);

  if (!sponge) {
    return (
      <div className="not-found">
        <p>Sponge not found for OTU ID {otu_id}.</p>
        <Footer />
      </div>
    );
  }

  return <ResultDetailsClient sponge={sponge} images={images} />;
}
