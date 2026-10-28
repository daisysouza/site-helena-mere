type GoogleMapEmbedProps = {
  query: string
  title: string
  className?: string
}

export function GoogleMapEmbed({ query, title, className = '' }: GoogleMapEmbedProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY
  const encodedQuery = encodeURIComponent(query)
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl border border-border ${className}`}>
      {apiKey ? (
        <iframe
          title={title}
          src={`https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${encodedQuery}`}
          className="size-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="flex size-full min-h-48 flex-col items-center justify-center gap-3 bg-muted p-6 text-center">
          <p className="text-sm text-muted-foreground">Configure a chave da Maps Embed API para exibir o mapa aqui.</p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline underline-offset-4"
          >
            Abrir localização no Google Maps
          </a>
        </div>
      )}
    </div>
  )
}
