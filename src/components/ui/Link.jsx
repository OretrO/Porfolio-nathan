import { useRouter } from '../../router/context'

const isPlainClick = (event) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey

/* Lien interne (#/…). Un clic sur la page déjà affichée relance le défilement. */
export default function Link({ to, onClick, children, ...rest }) {
  const { navigate } = useRouter()

  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented || !isPlainClick(event)) return
    event.preventDefault()
    navigate(to)
  }

  return (
    <a href={`#${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
