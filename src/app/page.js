import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4hOF-qWsqEQ"
                    title="YouTube video player" frameBorder="0"></iframe>
            <iframe width="560" height="315" src="https://youtu.be/i1b2HxKURtQ?si=kkNm5_RlFSyOOtnB"
                    title="YouTube video player" frameBorder="0"></iframe>
        </div>
    </main>
  );
}
