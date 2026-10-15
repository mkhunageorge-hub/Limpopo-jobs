'use client';

type AdBannerProps = {
  adKey: string;
  width: number;
  height: number;
};

export default function AdBanner({ adKey, width, height }: AdBannerProps) {
  const srcDoc = `<!doctype html><html><head><style>html,body{margin:0;padding:0;overflow:hidden}</style></head><body><script>atOptions={'key':'${adKey}','format':'iframe','height':${height},'width':${width},'params':{}};</script><script src="https://bicea.org/22/${adKey}"></script></body></html>`;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0', overflow: 'hidden', maxWidth: '100%' }}>
      <iframe
        title="Advertisement"
        srcDoc={srcDoc}
        width={width}
        height={height}
        scrolling="no"
        style={{ border: 0, maxWidth: '100%' }}
      />
    </div>
  );
}
