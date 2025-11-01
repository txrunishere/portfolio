import { Card, CardContent } from "./card";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useState, type ChangeEvent, type FormEvent } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { Loader } from "lucide-react";

export const ContactForm = () => {
  const [contact, setContact] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, name: e.target.value });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, email: e.target.value });

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setContact({ ...contact, message: e.target.value });

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://portfolio-contact-backend.vercel.app/contact",
        {
          email: contact.email,
          name: contact.name,
          message: contact.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.data.success) toast.error(response.data.error);
      else toast.success("Message send successfully!!");
    } catch (error) {
      const e = error as AxiosError<{ success: boolean; message: string }>;
      console.log({ error });
      if (e.response?.data) setError(e.response.data.message);
      else setError("Something went wrong while send message!!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Card className="w-full">
        <CardContent>
          <form onSubmit={handleSendEmail}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  autoComplete="username"
                  id="name"
                  type="text"
                  value={contact.name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  autoComplete="email"
                  id="email"
                  placeholder="alyx@gmail.com"
                  type="email"
                  value={contact.email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  className="h-[100px] resize-none"
                  value={contact.message}
                  onChange={handleMessageChange}
                  id="message"
                  placeholder="Enter your message here..."
                />
              </div>
              {error && (
                <p className="text-center text-[11px] leading-0 text-red-400 md:text-sm">
                  {error}
                </p>
              )}
              <div>
                <Button type="submit" variant={"default"} className="w-full">
                  {isLoading && <Loader className="animate-spin" />}
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
