"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const requestFormSchema = z.object({
  productName: z.string().min(3, "Product name must be at least 3 characters."),
  brand: z.string().optional(),
  details: z.string().min(10, "Please provide some details about the product.").max(500),
});

type RequestFormValues = z.infer<typeof requestFormSchema>;

export function RequestProductForm() {
    const { toast } = useToast();

    const form = useForm<RequestFormValues>({
        resolver: zodResolver(requestFormSchema),
        defaultValues: {
            productName: "",
            brand: "",
            details: "",
        },
    });

    function onSubmit(data: RequestFormValues) {
        console.log("Product Request:", data);
        toast({
            title: "Request Submitted!",
            description: "Thank you, we've received your product request.",
            action: <CheckCircle className="text-green-500" />,
        });
        form.reset();
    }

  return (
    <Card>
        <CardHeader>
            <CardTitle>Request a Product</CardTitle>
            <CardDescription>
              Can't find what you're looking for? Let us know and we'll see if we can stock it.
            </CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="productName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Golden Gesso Primer" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Brand (if known)</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., Golden Artist Colors" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Details</FormLabel>
                                <FormControl>
                                    <Textarea
                                      placeholder="Any other details, like size, color, or a link to the product..."
                                      className="min-h-[120px]"
                                      {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end">
                        <Button type="submit">Submit Request</Button>
                    </div>
                </form>
            </Form>
        </CardContent>
    </Card>
  );
}
