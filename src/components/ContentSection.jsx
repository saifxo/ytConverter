import React from "react";

const ContentSection = () => {
  return (
    <section className="w-full   pb-20 pt-36  px-32 ">
      <div className="w-full text-center">
        <h1 className="text-[3rem] font-bold">What is an IP address?</h1>
      </div>
      <div className="pt-8 w-full flex justify-center items-center text-center">
        <p className="max-w-[70%] text-xl">
          IP stands for Internet Protocol. The IP address is an essential
          component of the Internet, a huge network of linked devices that
          functions as a digital postal code to facilitate communication. In
          essence, an Internet Protocol (IP) address is a numerical label that
          is given to every device connected to a computer network. It functions
          like a digital address which enables your device to send and receive
          information to and from other devices on the internet.{" "}
        </p>
      </div>
      <div class="grid mb-8 mt-20 lg:mb-12 lg:grid-cols-2 gap-16">
        <div class="flex items-center justify-center flex-col gap-4">
          <p class="text-left text-lg">
            An IP address functions like a digital address, which enables your
            device to communicate with other devices on the internet. Similar to
            how your physical address helps mail locate you, your IP address
            helps other devices know where to send information, such as websites
            you visit or emails you send.
          </p>
          <p class="text-left text-lg">
            IP addresses are a silent but essential component of the seamless
            functioning of the digital world, from connecting devices in the
            Internet of Things to visiting websites.IP addresses can be used to
            track your online activity, which raises significant privacy
            concerns. Furthermore, IP spoofing is a common technique used by
            attackers to fake their IP address and evade detection. In this
            blog, we will explain everything you need to know about IP
            addresses.
          </p>
        </div>
        <div class="hover:scale-105 transition-all duration-200">
          <img class="rounded-lg max-w-[100%]" src="./img.png" alt="tos 1" />

          <p>
            <a href="https://www.freepik.com/free-photo/binary-world_2882402.htm#page=2&query=web%20world%20working%20computers%20cinnected&position=14&from_view=search&track=ais&uuid=e913b5e9-05b3-477a-bcdc-b0e341130bd0">
              Image by kjpargeter
            </a>{" "}
            on Freepik
          </p>
        </div>
      </div>

      <div className="w-full text-center pt-16">
        <h2 className="text-[3rem] font-bold">Types of IP addresses</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-300 transition-all">
          <h3 className="text-xl font-bold mb-4">IPv4</h3>
          <p className="text-gray-600">
            IPv4 addresses are the standard IP format and consist of 32 bits in
            dotted decimal notation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-300 transition-all">
          <h3 className="text-xl font-bold mb-4">IPv6</h3>
          <p className="text-gray-600">
            IPv6 is the newer version of the IP system, containing 128 bits and
            including letters and numbers.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-300 transition-all">
          <h3 className="text-xl font-bold mb-4">Private IP address</h3>
          <p className="text-gray-600">
            A private IP address is a unique identifier that is assigned to
            devices within a local network by a router.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-300 transition-all">
          <h3 className="text-xl font-bold mb-4">Public IP address</h3>
          <p className="text-gray-600">
            Devices on the Internet can be uniquely identified by their public
            IP address.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-300 transition-all">
          <h3 className="text-xl font-bold mb-4">Dynamic IP address</h3>
          <p className="text-gray-600">
            Internet service providers assign dynamic IP addresses to devices on
            their networks on a dynamic basis.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-300 transition-all">
          <h3 className="text-xl font-bold mb-4">Static IP address</h3>
          <p className="text-gray-600">
            Static IP addresses offer a reliable point of access to the Internet
            for a particular device.
          </p>
        </div>
      </div>

      <div className="w-full text-center pt-36">
        <p className="text-[3rem] font-bold">How does an IP address work?</p>
      </div>

      <div class="grid mb-8 mt-20 lg:mb-12 lg:grid-cols-2 gap-16">
        <div class="hover:scale-105 transition-all duration-200">
          <img class="rounded-lg max-w-[100%]" src="./img2.png" alt="tos 1" />

          <p className="text-center">
            <a href="https://www.freepik.com/free-vector/online-world-concept-illustration_7069065.htm#query=web%20world%20working%20computers%20connected&position=45&from_view=search&track=ais&uuid=6300c128-10ff-4849-8c46-54344b053979">
              Image by storyset
            </a>{" "}
            on Freepik
          </p>
        </div>
        <div class="flex items-center justify-center flex-col gap-4">
          <p class="text-left text-lg">
            An IP address is a unique identifier for internet-connected devices
            that aids in transmitting and routing data packets through the
            network. There are two primary formats for IP addresses: IPv4 and
            IPv6. An IP address is allocated by an ISP when a device connects to
            the internet and facilitates communication with other devices
            through the specification of the data packet source and destination.
            NAT is used to control the restricted supply of public IP addresses,
            and DNS connects IP addresses and easily navigable domain names.
          </p>
        </div>
      </div>

      <div className="w-full text-center pt-16">
        <p className="text-[3rem] font-bold">The Importance of IP addresses</p>
      </div>
      <div className="pt-8 w-full flex justify-center items-center text-center">
        <p className="max-w-[70%] text-xl">
          IP addresses function as unique identifiers for devices on the
          internet, ensuring that data is delivered to the intended destination.
          Like every house that needs an address for mail delivery, IP addresses
          enable smooth communication and connection between devices. They serve
          as the link for data exchange, which is exemplified when your device
          uses a website's IP address to connect and display it in your browser.
          These unsung heroes are crucial for the everyday online experiences
          that we often take for granted. Two of the major significances of IP
          addresses are given below.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-16">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-300 transition-all">
          <h3 className="text-xl font-bold mb-4">
            Identifying Devices on the Network
          </h3>
          <p className="text-gray-600">
            IP addresses are more than just a means of connection; they are also
            used to identify devices on a network. They facilitate accurate
            communication and data transfer by differentiating one device from
            another. The fundamental features of IP addresses guarantee a
            precise and seamless interchange of data whether you're viewing a
            video, sending an email, or visiting a website.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-110 duration-300 transition-all">
          <h3 className="text-xl font-bold mb-4">
            Guardians of Online Security
          </h3>
          <p className="text-gray-600">
            IP address knowledge becomes essential while discussing
            cybersecurity. They are crucial elements in identifying and
            controlling possible risks. IP addresses help protect against
            malicious activity and unauthorized access by tracking the source
            and destination of data. IP addresses are the hidden heroes
            reshaping our digital world; they do everything from preventing
            cyberattacks to enabling the smooth flow of information.
          </p>
        </div>
      </div>

      <div className="w-full text-center pt-36">
        <p className="text-[3rem] font-bold">How do I hide my IP address?</p>
      </div>

      <div class="grid mb-8 mt-20 lg:mb-12 lg:grid-cols-2 gap-16">
        <div class="flex items-center justify-center flex-col gap-4">
          <p class="text-left text-lg">
            Various methods can be employed to hide your IP address, providing
            increased privacy, security, and anonymity while online. One popular
            approach is to utilize a virtual private network (VPN), which
            redirects your internet traffic through its servers and presents the
            server's IP instead of your actual IP, obscuring your identity. VPNs
            not only enhance your digital privacy but also offer additional
            network security by safeguarding against potential threats such as
            IP spoofing. Proxy servers offer a similar solution by acting as
            intermediaries between your device and the internet. They hide your
            IP address, which can further enhance your privacy, and data
            security and help you bypass network restrictions.
          </p>
          <p class="text-left text-lg">
            Another straightforward method is to contact your Internet service
            provider to request an IP address change, ensuring that your future
            online activities will be linked to the new IP, thus enhancing your
            digital privacy. For those on a budget, simpler measures such as
            unplugging your router or utilizing privacy-focused browsers such as
            the Tor browser can effectively alter or mask your IP while
            browsing.
          </p>
          <p class="text-left text-lg">
            However, it is important to note that while these methods can
            enhance your privacy, they might not provide complete anonymity, and
            users should be aware of the limitations and potential risks
            associated with each approach.
          </p>
        </div>
        <div class="hover:scale-105 transition-all duration-200">
          <img class="rounded-lg max-w-[100%]" src="./img3.png" alt="tos 1" />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
