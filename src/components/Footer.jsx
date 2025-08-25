
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href="twitter">
                            <SocialIcon network='twitter' style={{ height: 25, width: 25 }} />
                        </a>
                    </li>

                    <li>
                        <a href="Facebook">
                            <SocialIcon network='linkedin' style={{ height: 25, width: 25 }}  />
                        </a>
                    </li>

                    <li>
                        <a href="Instagram"><SocialIcon network='instagram' style={{ height: 25, width: 25 }} />
                        </a>
                    </li>

                    <li>
                        <a href="Github"><SocialIcon network='github' style={{ height: 25, width: 25 }} />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}